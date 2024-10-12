import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function PreviewMeeting({ formValue }) {
  const [date, setDate] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState([]);

  useEffect(() => {
    formValue?.duration && createTimeSlot(formValue?.duration);
  }, [formValue]);

  /**
   * Used to create timeslots based on the interval
   * @param {*} interval
   */
  const createTimeSlot = (interval) => {
    const startTime = 8 * 60; // 8 AM in minutes
    const endTime = 22 * 60; // 10 PM in minutes
    const totalSlots = (endTime - startTime) / interval;
    const slots = Array.from({ length: totalSlots }, (_, i) => {
      const totalMinutes = startTime + i * interval;
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      const formattedHours = hours > 12 ? hours - 12 : hours; // Convert to 12-hour format
      const period = hours >= 12 ? 'PM' : 'AM';
      return `${String(formattedHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${period}`;
    });

    setTimeSlots(slots);
  };

  return (
    <div
      className="p-5 py-10 shadow-lg m-5 border-t-8"
      style={{ borderTopColor: formValue?.themeColor }}
    >
      <div className="flex justify-center md:justify-start">
        <Image src="/logo.png" alt="logo" width={150} height={150} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {/* Meeting Info  */}
        <div className="p-4 border-r">
          <h2 className="text-lg font-semibold">Business Name</h2>
          <h2 className="font-bold text-2xl md:text-3xl mt-2">
            {formValue?.eventName ? formValue?.eventName : 'Meeting Name'}
          </h2>
          <div className="mt-5 flex flex-col gap-2">
            <h2 className="flex gap-2 items-center">
              <Clock /> {formValue?.duration} Min
            </h2>
            <h2 className="flex gap-2 items-center">
              <MapPin /> {formValue?.locationType} Meeting
            </h2>
            <Link href={'#'} className="text-primary break-words">
              {formValue?.locationUrl}
            </Link>
          </div>
        </div>

        {/* Time & Date Selection */}
        <div className="md:col-span-2 flex flex-col gap-5 px-4">
          <div className="flex flex-col">
            <h2 className="font-bold text-lg">Select Date & Time</h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border mt-5"
              disabled={(date) => date <= new Date()}
            />
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 overflow-y-auto"
            style={{ maxHeight: '400px' }}
          >
            {timeSlots?.map((time, index) => (
              <Button
                key={index}
                className="border-primary text-primary"
                variant="outline"
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewMeeting;
