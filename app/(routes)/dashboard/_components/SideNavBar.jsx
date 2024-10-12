"use client"
import { Button } from '@/components/ui/button'
import { Briefcase, Calendar, Clock, Plus, Settings, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function SideNavBar() {
    const menu = [
        {
            id: 1,
            name: 'Meeting Type',
            path: '/dashboard/meeting-type',
            icon: Briefcase
        },
        {
            id: 2,
            name: 'Scheduled Meeting',
            path: '/dashboard/scheduled-meeting',
            icon: Calendar
        },
        {
            id: 3,
            name: 'Availability',
            path: '/dashboard/availability',
            icon: Clock
        },
        {
            id: 4,
            name: 'Settings',
            path: '/dashboard/settings',
            icon: Settings
        },

    ]

    const path = usePathname();
    const [activePath, setActivePath] = useState(path);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar visibility

    useEffect(() => {
        path && setActivePath(path)
    }, [path])

    // Toggle sidebar visibility on mobile
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='relative'>
            {/* Toggle button for mobile */}
            <div className='md:hidden fixed top-5 right-5 z-50'>
                <Button onClick={toggleSidebar} className="p-2">
                    <Menu className="w-6 h-6" />
                </Button>
            </div>

            {/* Sidebar */}
            <div className={`fixed md:relative top-0 left-0 z-40 md:z-auto bg-white p-5 py-14 h-full transition-transform transform 
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} md:block`}>
                <div className='flex justify-center'>
                    <Image src='/logo.png' width={150} height={150} alt='logo' />
                </div>

                <Link href={'/create-meeting'}>
                    <Button className="flex gap-2 w-full mt-7 rounded-full"> 
                        <Plus /> Create
                    </Button>
                </Link>

                <div className='mt-5 flex flex-col gap-5'>
                    {menu.map((item, index) => (
                        <Link href={item.path} key={index}>
                            <Button
                                variant="ghost"
                                className={`w-full flex gap-2 justify-start hover:bg-blue-100 font-normal text-lg 
                                ${activePath == item.path && 'text-primary bg-blue-100'}`}>
                                <item.icon /> {item.name}
                            </Button>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Overlay for mobile */}
            {isSidebarOpen && (
                <div 
                    className='fixed inset-0 bg-black opacity-50 z-30 md:hidden'
                    onClick={toggleSidebar} // Close sidebar when clicking outside
                ></div>
            )}
        </div>
    )
}

export default SideNavBar;
