import { execSync } from 'child_process';

export default function getDockerSocketpath(): string {
    let returnString = '/var/run/docker.sock';

    try {
        const stdout = execSync('docker context ls --format "{{ json . }}"').toString();
        const output = stdout.trim();
        const outputJson = output.split('\n').map((str) => str.trim()).map((jsonStr) => JSON.parse(jsonStr));
        const rootlessObject = outputJson.find(item => item.Name === 'rootless');
        returnString = rootlessObject ? rootlessObject.DockerEndpoint.slice(7) : returnString;
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
    }

    return returnString;
}