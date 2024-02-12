"use client"

import useSWR from "swr";
import {fetcher} from "@/lib/fetcher";
import {FaDocker} from "react-icons/fa";
import {CpuIcon, HardDriveIcon, Loader2} from "lucide-react";
import {cn} from "@/lib/utils";

export default function DrivesWidget() {
    const {data, isLoading, error} = useSWR('/api/file-system-info', fetcher, { refreshInterval: 10000 })
    const drivesCount = data?.length;

    return (
        <div
            className={cn(isLoading ? 'justify-center' : 'justify-between','border-border border-[1px] rounded h-24 w-full max-w-[25vw] px-12 flex gap-8 items-center')}>
            {isLoading ? <Loader2 className={'animate-spin'}/> : (
                <>
                    <div className={'flex flex-col items-start'}>
                        <p className={'font-bold'}>Drives count:</p>
                        <p className={'text-2xl'}>{drivesCount}</p>
                    </div>
                    <HardDriveIcon size={40}/>
                </>
            )}
        </div>
    )
}