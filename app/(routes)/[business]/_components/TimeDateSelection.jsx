import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import React from 'react';

function TimeDateSelection({ date, handleDateChange, timeSlots, setSelectedTime, enableTimeSlot, selectedTime, prevBooking }) {

  /**
   * Used to check if a timeslot is already booked
   * @param {*} time 
   * @returns Boolean
   */
  const checkTimeSlot = (time) => {
    return prevBooking.some(item => item.selectedTime === time);
  }

  return (
    <div className='md:col-span-2 flex flex-col md:flex-row px-4'>
      <div className='flex flex-col w-full md:w-1/2'>
        <h2 className='font-bold text-lg mb-2'>Select Date</h2>
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) => handleDateChange(d)}
          className="rounded-md border mt-2 md:mt-0"
          disabledDate={(date) => date <= new Date()}
        />
      </div>
      <div className='flex flex-col w-full md:w-1/2 mt-4 md:mt-0 md:ml-4'>
        <h2 className='font-bold text-lg mb-2'>Select Time Slot</h2>
        <div className='flex flex-wrap gap-2'>
          {timeSlots?.map((time, index) => (
            <Button
              key={index}
              disabled={!enableTimeSlot || checkTimeSlot(time)}
              onClick={() => setSelectedTime(time)}
              className={`w-full md:w-auto border text-primary ${time === selectedTime ? 'bg-primary text-white' : 'bg-white hover:bg-gray-100'} rounded-md py-2 px-4 focus:outline-none transition-all duration-300 ease-in-out`}
            >
              {time}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TimeDateSelection;
