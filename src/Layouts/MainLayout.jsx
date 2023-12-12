import AboutSection from "../Pages/Home/AboutSection";
import Banner from "../Pages/Home/Banner";
import Contact from "../Pages/Home/Contact";
import Footer from "../Pages/Home/Footer";
import Navbar from "../Pages/Home/Navbar";
import ProjectsSection from "../Pages/Home/ProjectSection";
import Skills from "../Pages/Home/Skills";

const MainLayout = () => {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212] max-w-7xl px-4 md:px-12 py-4 mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutSection></AboutSection>
      <Skills></Skills>
      <ProjectsSection></ProjectsSection>
      <Contact></Contact>
      <Footer></Footer>
    </main>
    );
};

export default MainLayout;