"use client"

import useSWR from "swr";
import {fetcher} from "@/lib/fetcher";
import {FaDocker} from "react-icons/fa";
import {Loader2} from "lucide-react";
import {cn} from "@/lib/utils";

export default function DockerWidget() {
    const {data, isLoading, error} = useSWR('/api/docker-info', fetcher, { refreshInterval: 10000 })
    const isDocker = data && Object.keys(data).length;
    return(
        <div className={cn(isLoading ? 'justify-center' : 'justify-between','border-border border-[1px] rounded h-24 w-full max-w-[25vw] px-12 flex gap-8 items-center')}>
            {isLoading ? <Loader2 className={'animate-spin'}/> : (
                <>
                    <div className={'flex flex-col items-start text-xs'}>
                        <p className={'font-bold text-base'}>Docker:</p>
                        {!isDocker
                            ? <p>No Docker detected</p>
                            : (
                                <>
                                    <p>Running containers: {data?.ContainersRunning}</p>
                                    <p>Images: {data?.Images}</p>
                                </>
                            )
                        }
                    </div>
                    <FaDocker size={40}/>
                </>
            )}
        </div>
    )
}