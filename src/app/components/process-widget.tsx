"use client"

import useSWR from "swr";
import {fetcher} from "@/lib/fetcher";
import {CpuIcon, HardDriveIcon, Loader2} from "lucide-react";
import {cn} from "@/lib/utils";

export default function ProcessWidget() {
    const {data, isLoading, error} = useSWR('/api/processes-info', fetcher, { refreshInterval: 10000 })

    return (
        <div
        className={cn(isLoading ? 'justify-center' : 'justify-between', 'border-border border-[1px] rounded h-24 w-full max-w-[25vw] px-12 flex gap-8 items-center')}>
        {isLoading ? <Loader2 className={'animate-spin'}/> : (
            <>
                <div className={'flex flex-col items-start'}>
                    <p className={'font-bold'}>Processes:</p>
                    <p className={'text-2xl'}>{data?.all}</p>
                </div>
                <CpuIcon size={40}/>
            </>
        )}
        </div>

    )
}