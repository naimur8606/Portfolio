"use client";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import ContactProvider from "./ContactProvider";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Contact = () => {
    const formRef = useRef(null);

    const form = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;
        ContactProvider(name, email, subject, message)
        formRef.current.reset();
    };

    return (
        <div className=" text-white">
            <div id="contact" className="py-10">
                <div className="flex flex-col lg:flex-row justify-between mt-10">
                    <div className="lg:w-1/2 pr-5">
                        <h5 className="text-xl font-bold text-white my-2">
                            Let&apos;s Connect
                        </h5>
                        <p className="text-gray-500 pb-5 text-justify">I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                        <div className="flex space-x-5">
                            <a href="https://www.facebook.com/mdnaimurrahman8606/">
                                <BsFacebook className="text-4xl mr-3"></BsFacebook>
                            </a>
                            <a href="https://www.linkedin.com/in/naimur2935/">
                                <BsLinkedin className="text-4xl mr-3"></BsLinkedin>
                            </a>
                            <a href="https://github.com/naimur8606">
                                <BsGithub className="text-4xl mr-3"></BsGithub>
                            </a>
                        </div>
                        <a
                            href="/Md Naimur Rahman Resume.pdf"
                            download
                            className="px-1 inline-block py-1  sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-green-500 hover:bg-slate-800 text-white mt-6"
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </a>

                    </div>
                    <form ref={formRef} onSubmit={(e) => form(e)} className="lg:w-1/2 mt-5 lg:mt-0">
                        <input className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" type="text" name="name" placeholder="Your Name" /><br />
                        <input className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" type="email" name="email" placeholder="Your Email" /><br />
                        <input className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" type="text" name="subject" placeholder="Subject" /><br />
                        <textarea className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" id="" cols="" rows="3" name="message" placeholder="Your Message"></textarea>
                        <button className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-green-500 hover:bg-slate-200 text-white mt-5" type="submit">Sent Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
