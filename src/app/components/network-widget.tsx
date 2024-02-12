"use client"

import useSWR from "swr";
import {fetcher} from "@/lib/fetcher";
import {HardDriveIcon, Loader2, WifiIcon} from "lucide-react";
import {cn} from "@/lib/utils";

export default function NetworkWidget() {
    const {data, isLoading, error} = useSWR('/api/network-info', fetcher, { refreshInterval: 10000 })
    const finalData = data && data[0]
    return (
        <div
            className={cn(isLoading ? 'justify-center' : 'justify-between', 'border-border border-[1px] rounded h-24 w-full max-w-[25vw] px-12 flex gap-8 items-center')}>
            {isLoading ? <Loader2 className={'animate-spin'}/> : (
                <>
                    <div className={'flex flex-col items-start text-xs'}>
                        <p className={'font-bold text-base'}>Network:</p>
                        <p>{finalData?.iface}</p>
                        {/*<p>{Math.round(finalData?.tx_sec)} {Math.round(finalData?.rx_sec)}</p>*/}
                    </div>
                    <WifiIcon size={40}/>
                </>
            )}
        </div>

    )
}
