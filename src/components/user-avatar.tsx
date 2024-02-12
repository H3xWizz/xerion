import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {getServerSession} from "next-auth";
import authOptions from "@/lib/authoptions";
import SignoutButton from "@/components/signout-button";

export async function UserAvatar() {
    const session = await getServerSession(authOptions)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className={'focus-visible:hidden cursor-pointer'}>
                <Avatar>
                    <AvatarImage src={session?.user?.image as string} alt="@shadcn" />
                    <AvatarFallback>HW</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>
                    <p className={'font-bold'}>{session?.user?.name}</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
                <DropdownMenuSeparator/>
                <SignoutButton/>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
