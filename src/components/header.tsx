import {NavItems} from "@/module/nav-items";
import Link from "next/link";
import {ThemeToggle} from "@/components/theme-toggle";
import {UserAvatar} from "@/components/user-avatar";
import Image from "next/image";
import Logo from "@/components/logo";

export default function Header() {
    return(
        <div className={'h-[4rem] w-screen px-12 flex justify-between items-center bg-background border-b-[1px] border-border'}>
            <div className={'flex gap-4 items-center'}>
                <Logo size={30}/>
                {NavItems.map((item, index) => (
                    <Link href={item.href} key={index}>
                        <p className={'font-bold'}>{item.name}</p>
                    </Link>
                ))}
            </div>
            <div className={'flex gap-4 items-center'}>
                <ThemeToggle/>
                <UserAvatar/>
            </div>
        </div>
    )
}