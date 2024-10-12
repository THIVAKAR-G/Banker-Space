import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { CalendarCheck, Clock, Timer } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function ScheduledMeetingList({ meetingList }) {
    return (
        <div className="space-y-4">
            {meetingList && meetingList.map((meeting, index) => (
                <Accordion type="single" collapsible key={index}>
                    <AccordionItem value={`item-${index}`}>
                        <AccordionTrigger className="px-4 py-2 border-b border-gray-200 flex items-center justify-between cursor-pointer focus:outline-none">
                            <div className="flex items-center space-x-2">
                                <CalendarCheck className="w-6 h-6" />
                                <span className="font-medium">{meeting?.formatedDate}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Clock className="w-6 h-6" />
                                <span>{meeting?.duration} Min</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-2 bg-gray-50">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <CalendarCheck className="w-6 h-6" />
                                    <span>{meeting?.formatedDate}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Timer className="w-6 h-6" />
                                    <span>{meeting?.selectedTime}</span>
                                </div>
                                <div>
                                    <Link href={meeting?.locationUrl ? meeting?.locationUrl : '#'}>
                                        <span className="text-primary hover:underline">{meeting?.locationUrl}</span>
                                    </Link>
                                </div>
                                <div>
                                    <Link href={meeting.locationUrl}>
                                        <Button className="w-full">Join Now</Button>
                                    </Link>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            ))}
        </div>
    );
}

export default ScheduledMeetingList;
