"use client"

import {DropdownMenuItem} from "@/components/ui/dropdown-menu";
import { signOut } from 'next-auth/react';

export default function SignoutButton() {
    const handleLogout = async () => {
        await signOut({ callbackUrl: '/' })
    }

    return <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>

}