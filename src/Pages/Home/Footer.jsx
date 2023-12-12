import { BsFacebook, BsGithub, BsLinkedin, BsMessenger, BsYoutube } from "react-icons/bs";

const Footer = () => {
    return (

        <div>
            <div className="flex justify-center space-x-2 text-white border-b pb-2">
                <a href="https://www.facebook.com/mdnaimurrahman8606/">
                    <BsFacebook className="text-4xl mr-3"></BsFacebook>
                </a>
                <a href="https://www.linkedin.com/in/naimur2935/">
                    <BsLinkedin className="text-4xl mr-3"></BsLinkedin>
                </a>
                <a href="https://github.com/naimur8606">
                    <BsGithub className="text-4xl mr-3"></BsGithub>
                </a>
                <a href="https://www.youtube.com/@codingbangla1">
                    <BsYoutube className="text-4xl mr-3"></BsYoutube>
                </a>
                <a href="https://www.facebook.com/messages/t/100081459700719">
                    <BsMessenger className="text-4xl mr-3"></BsMessenger>
                </a>
            </div>
            <footer className="footer footer-center p-4 text-white">
                <aside>
                    <p>Copyright © 2023 - All right reserved by Freelancer Naimur</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;