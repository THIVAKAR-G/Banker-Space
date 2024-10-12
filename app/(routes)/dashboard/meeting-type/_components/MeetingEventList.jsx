"use client"
import { Button } from '@/components/ui/button';
import { app } from '@/config/FirebaseConfig'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { getFirestore, collection, query, where, getDocs, orderBy, deleteDoc, doc, getDoc } from 'firebase/firestore'
import { Clock, Copy, MapPin, Pen, Settings, Trash } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toastify
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function MeetingEventList() {
    const db = getFirestore(app);
    const { user } = useKindeBrowserClient();
    const [businessInfo, setBusinessInfo] = useState();
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        user && getEventList();
        user && BusinessInfo();
    }, [user])

    const getEventList = async () => {
        setEventList([]);
        const q = query(collection(db, "MeetingEvent"),
            where("createdBy", "==", user?.email),
            orderBy('id', 'desc'));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setEventList(prevEvent => [...prevEvent, doc.data()]);
        });
    }

    const BusinessInfo = async () => {
        const docRef = doc(db, 'Business', user.email);
        const docSnap = await getDoc(docRef);
        setBusinessInfo(docSnap.data());
    }

    const onDeleteMeetingEvent = async (event) => {
        await deleteDoc(doc(db, "MeetingEvent", event?.id)).then(resp => {
            toast.success('Meeting Event Deleted!');
            getEventList();
        })
    }

    const onCopyClickHandler = (event) => {
        const meetingEventUrl = process.env.NEXT_PUBLIC_BASE_URL + '/' + businessInfo.businessName + '/' + event.id;
        navigator.clipboard.writeText(meetingEventUrl);
        toast.info('Link copied! Ready to share.');
    }

    const onShareClickHandler = (event) => {
        const meetingEventUrl = process.env.NEXT_PUBLIC_BASE_URL + '/' + businessInfo.businessName + '/' + event.id;

        if (navigator.share) {
            navigator.share({
                title: 'Meeting Event',
                text: `Join this meeting: ${event.eventName}`,
                url: meetingEventUrl
            })
                .then(() => toast.success('Link shared successfully!'))
                .catch((error) => toast.error('Failed to share the link.'));
        } else {
            toast.error('Sharing is not supported on this browser.');
        }
    }

    return (
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* ToastContainer is needed to display the toast messages */}
            <ToastContainer />
            {eventList.length > 0 ? eventList.map((event, index) => (
                <div key={index} className='bg-white border border-gray-200 shadow-lg rounded-xl p-6 flex flex-col gap-4 relative transition-transform transform hover:scale-105 hover:shadow-2xl'>
                    <div className='absolute top-4 right-4'>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Settings className='cursor-pointer text-gray-500 hover:text-primary' />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-40">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="flex gap-2 text-gray-600 hover:text-primary"> <Pen /> Edit</DropdownMenuItem>
                                <DropdownMenuItem className="flex gap-2 text-gray-600 hover:text-primary"
                                    onClick={() => onDeleteMeetingEvent(event)}>
                                    <Trash /> Delete
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">{event?.eventName}</h2>
                    <div className='flex justify-between items-center text-gray-500'>
                        <span className='flex items-center gap-2'><Clock className='w-5 h-5' /> {event.duration} Min</span>
                        <span className='flex items-center gap-2'><MapPin className='w-5 h-5' /> {event.locationType}</span>
                    </div>
                    <hr className='border-gray-200' />
                    <div className='flex justify-between items-center'>
                        <button
                            onClick={() => onCopyClickHandler(event)}
                            className='flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600 font-medium'>
                            <Copy className='w-4 h-4' /> Copy Link
                        </button>
                        <Button variant="outline" className="rounded-full text-primary border-primary hover:bg-primary hover:text-white transition-all"
                            onClick={() => onShareClickHandler(event)}>
                            Share
                        </Button>
                    </div>
                </div>
            ))
                : <h2 className='text-center text-gray-500 col-span-full'>Loading...</h2>
            }
        </div>
    )
}

export default MeetingEventList;
