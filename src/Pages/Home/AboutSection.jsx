import { BsTelephoneInbound } from "react-icons/bs";
import { FaGraduationCap, FaLocationArrow } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const AboutSection = () => {

  return (
    <section id='about' className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-12 xl:px-16">
        <img className="rounded-full" src="https://i.ibb.co/ZxwzkR6/about-Image.gif" alt="banner image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Node.js, Express, NoSQL,
            MongoDB, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="mt-5 text-xl space-y-3">
            <div className="flex">
              <FaGraduationCap className="mr-4 text-4xl"></FaGraduationCap>
              <div className="space-y-1">
                <h4>BSC in CSE <span className="text-xs">(2022-Present)</span></h4>
                <p className="text-base">Southeast University <br /> Dhaka, Bangladesh</p>
              </div>
            </div>
            <p className="flex items-center"><BsTelephoneInbound className="mr-4 text-4xl"></BsTelephoneInbound> +8801568882935</p>
            <p className="flex items-center"><MdOutlineEmail className="mr-4 text-4xl"></MdOutlineEmail> naimur2935@gmail.com</p>
            <p className="flex items-center"><FaLocationArrow className="mr-4 text-4xl"></FaLocationArrow> Ibrahimpur, Dhaka-1216, Bangladesh</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;