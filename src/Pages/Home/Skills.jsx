import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiBootstrap, SiExpress, SiFirebase, SiJavascript, SiMongodb, SiNodedotjs, SiReact, SiTailwindcss } from "react-icons/si";

const Skills = () => {
    return (
        <div id="skills">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 mb-12">
                <div className="flex flex-col items-center">
                    <div className="radial-progress mb-3 text-green-500" style={{ "--value": 89 }} role="progressbar">89%</div>
                    <div className="flex items-center text-xl text-white font-bold">
                        <FaHtml5 className="mr-2 text-5xl"></FaHtml5> HTML5
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="radial-progress mb-3 text-green-500" style={{ "--value": 85 }} role="progressbar">85%</div>
                    <div className="flex items-center text-xl text-white font-bold">
                        <FaCss3Alt className="mr-2 text-5xl"></FaCss3Alt> CSS3
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="radial-progress mb-3 text-green-500" style={{ "--value": 92 }} role="progressbar">92%</div>
                    <div className="flex items-center text-xl text-white font-bold">
                        <SiTailwindcss className="mr-2 text-5xl"></SiTailwindcss> Tailwind CSS
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="radial-progress mb-3 text-green-500" style={{ "--value": 80 }} role="progressbar">80%</div>
                    <div className="flex items-center text-xl text-white font-bold">
                        <SiBootstrap className="mr-2 text-5xl"></SiBootstrap> Bootstrap
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="radial-progress mb-3 text-green-500" style={{ "--value": 80 }} role="progressbar">80%</div>
                    <div className="flex items-center text-xl text-white font-bold">
                        <SiJavascript className="mr-2 text-5xl"></SiJavascript> JavaScript
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="radial-progress mb-3 text-green-500" style={{ "--value": 88 }} role="progressbar">88%</div>
                    <div className="flex items-center text-xl text-white font-bold">
                        <SiReact className="mr-2 text-5xl"></SiReact> ReactJS
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="radial-progress mb-3 text-green-500" style={{ "--value": 90 }} role="progressbar">90%</div>
                    <div className="flex items-center text-xl text-white font-bold">
                        <SiFirebase className="mr-2 text-5xl"></SiFirebase> Firebase
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="radial-progress mb-3 text-green-500" style={{ "--value": 80 }} role="progressbar">80%</div>
                    <div className="flex items-center text-xl text-white font-bold">
                        <SiExpress className="mr-2 text-5xl"></SiExpress> Express
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="radial-progress mb-3 text-green-500" style={{ "--value": 75 }} role="progressbar">75%</div>
                    <div className="flex items-center text-xl text-white font-bold">
                        <SiNodedotjs className="mr-2 text-5xl"></SiNodedotjs> NodeJS
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="radial-progress mb-3 text-green-500" style={{ "--value": 85 }} role="progressbar">85%</div>
                    <div className="flex items-center text-xl text-white font-bold">
                        <SiMongodb className="mr-2 text-5xl"></SiMongodb> MongoDB
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;