import ServerId from "@/components/server-id";
import ProcessWidget from "@/app/components/process-widget";
import NetworkWidget from "@/app/components/network-widget";
import DockerWidget from "@/app/components/docker-widget";
import DrivesWidget from "@/app/components/drives-widget";


export default function Home() {
  return (
    <div className={'flex flex-col gap-12'}>
        <div className={'flex justify-between items-center'}>
            <h1 className={'font-bold text-4xl'}>Dashboard</h1>
            <ServerId/>
        </div>
        <div className={'flex justify-around gap-6 items-center'}>
            <ProcessWidget/>
            <NetworkWidget/>
            <DrivesWidget/>
            <DockerWidget/>
        </div>
    </div>
  );
}
