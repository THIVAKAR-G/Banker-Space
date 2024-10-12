"use client"
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function DashboardHeader() {
    const { user } = useKindeBrowserClient();

    return user && (
        <div className='p-4 px-6 md:px-10'>
            <div className='w-full flex justify-end'>
                <DropdownMenu>
                    <DropdownMenuTrigger className='flex items-center gap-2'>
                        <Image 
                            src={user?.picture || '/default-avatar.png'} // Placeholder in case picture is undefined
                            alt='User avatar'
                            width={40}
                            height={40}
                            className='rounded-full object-cover'
                        />
                        <ChevronDown className="hidden md:block" /> {/* Hide Chevron icon on smaller screens */}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>
                            <LogoutLink>Logout</LogoutLink>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default DashboardHeader;
