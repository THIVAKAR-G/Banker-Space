import { Input } from '@/components/ui/input';
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

function UserFormInfo({ setUserName, setUserEmail, setUserNote }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isChecked, setIsChecked] = useState(false); // State to manage checkbox
    const [isSending, setIsSending] = useState(false); // State to manage sending status

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        // Update parent component's state if provided
        if (name === 'name') setUserName && setUserName(value);
        if (name === 'email') setUserEmail && setUserEmail(value);
        if (name === 'message') setUserNote && setUserNote(value);
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        // If checkbox is checked, send the email
        if (event.target.checked) {
            sendEmail();
        }
    };

    const sendEmail = () => {
        // Check if the form data is valid
        if (!formData.name || !formData.email || !formData.message) {
            setIsChecked(false); // Uncheck the box if validation fails
            return;
        }

        setIsSending(true); // Set sending state to true

        // Send the form data using EmailJS
        emailjs.send('service_of5w8ts', 'template_tsk66mk', formData, 'fpb8nodwToJ_IkrYz')
            .then(() => {
                // Do not clear form data, keep it as is
                // setFormData({ name: '', email: '', message: '' }); // Removed this line

                // You can keep the checkbox checked, or implement a timeout to uncheck it later
                setTimeout(() => {
                    setIsChecked(false); // Reset checkbox after a delay if needed
                }, 2000); // Change the delay as needed (2000ms = 2 seconds)

                // Reset sending state
                setIsSending(false);
            })
            .catch(() => {
                setIsChecked(false); // Reset checkbox if there's an error
                setIsSending(false); // Reset sending state
            });
    };

    return (
        <div className='p-4 px-8 flex flex-col gap-3'>
            <h2 className='font-bold text-xl'>Enter Details</h2>
            <form>
                <div>
                    <h2>Name *</h2>
                    <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div>
                    <h2>Email *</h2>
                    <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div>
                    <h2>Share any Notes</h2>
                    <Input
                        as="textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter any notes or message"
                        required
                    />
                </div>
                <div className="flex items-center mt-4">
                    <input
                        type="checkbox"
                        id="sendEmailCheckbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        required
                    />
                    <label htmlFor="sendEmailCheckbox" className="ml-2" >
                        I confirm to send this email
                    </label>
                </div>
            </form>
        </div>
    );
}

export default UserFormInfo;
