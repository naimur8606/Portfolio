import AboutSection from "./AboutSection";
import Banner from "./Banner";
import Contact from "./Contact";
import Navbar from "./Navbar";
import ProjectsSection from "./ProjectSection";

const Home = () => {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212] max-w-7xl sm:px-12 py-4 mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <ProjectsSection></ProjectsSection>
            <Contact></Contact>
        </main>
    );
};

export default Home;