import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Analytics',
}

export default function Page() {
    return (
        <div>
            <h1 className={'font-bold text-4xl'}>Analytics</h1>
        </div>
    );
}
