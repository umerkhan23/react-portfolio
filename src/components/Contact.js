import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef(); 
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rue32fz', 'template_iyftzc5', form.current, 'm-XtOxdkm2ttTaUXS')
            .then((result) => {
                console.log(result.text);
                alert('Your message has been sent successfully.');
                setName('');
                setEmail('');
                setMessage('');
            }, (error) => {
                console.log(error.text);
                alert('Error');
                setName('');
                setEmail('');
                setMessage('');
            });
    };
    return (
        <div className='relative top-20 bg-slate-900'>
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl text-center text-white font-bold py-10 p-3'>Contact</h1>
            </div>
            <div className="text-gray-600 body-font relative" data-aos='fade-up' data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <div className="absolute inset-0 bg-gray-300">
                    <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map"
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106389.97557771104!2d73.02120645!3d33.5615146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df948974419acb%3A0x984357e1632d30f!2sRawalpindi%2C%20Punjab!5e0!3m2!1sen!2s!4v1668518374229!5m2!1sen!2s"
                        styles="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
                </div>
                <div className="container px-5 py-24 mx-auto flex">
                    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <h2 className="text-gray-900 text-2xl mb-2 font-medium title-font">Contact</h2>
                        <h2 className="text-md mb-1">Mobile No: +923086899997</h2>
                        <h2 className="text-md mb-1">Gmail: umerkhanmcs23@gmail.com</h2>
                        <form ref={form} className='flex flex-col ' onSubmit={sendEmail}>
                            <label>Name</label>
                            <input className='w-full bg-white rounded border border-gray-300 focus:border-blue-700 focus:ring-2 focus:ring-blue-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' type="text" name="user_name" value={Name} onChange={(e) => {setName(e.target.value)}} />
                            <label>Email</label>
                            <input className='w-full bg-white rounded border border-gray-300 focus:border-blue-700 focus:ring-2 focus:ring-blue-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' type="email" name="user_email" value={Email} onChange={(e) => {setEmail(e.target.value)}} />
                            <label>Message</label>
                            <textarea className='w-full bg-white rounded border border-gray-300 focus:border-blue-700 focus:ring-2 focus:ring-blue-600 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out' name="message" value={Message} onChange={(e) => {setMessage(e.target.value)}} />
                            <input className='text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg m-3' type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;