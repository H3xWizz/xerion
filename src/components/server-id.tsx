"use client"

import useSWR from "swr";
import {Loader2} from "lucide-react";
import {fetcher} from "@/lib/fetcher";

export default function ServerId() {
    const {data, isLoading, error} = useSWR('/api/os-info', fetcher)

    const osString = `${data?.distro} ${data?.release} @${data?.hostname}`

    return isLoading ? (
        <div className={'p-1 bg-background border-border border-[1px] rounded-full'}>
            <Loader2 size={'2vh'} className={'animate-spin'}/>
        </div>
    ) : (
        <div className={'px-4 py-1 bg-green-500 rounded-full border-border border-[1px] text-black font-light text-sm'}>
            <p>{osString}</p>
        </div>
    )
}