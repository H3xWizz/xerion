"use client"

import {useTheme} from "next-themes";
import Image from "next/image";

type Props = {
    size: number
}

export default function Logo({size}: Props) {
    const {theme} = useTheme()

    return theme === 'light'
        ? <Image src={'/logo-dark.png'} alt={'Logo'} width={size} height={size}/>
        : <Image src={'/logo-light.png'} alt={'Logo'} width={size} height={size}/>
}