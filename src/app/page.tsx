import HeroSection from "@/components/section/hero";
import AboutSection from "@/components/section/about";
import JourneySection from "@/components/section/journey";
import SkillSection from "@/components/section/skill"
import GithubPage from "@/components/section/githubs";
import ProjectsSection from "@/components/section/projects";
import Forms from "@/components/section/forms";
import Footer from "@/components/section/footer";
export default function Page(){
    return(
        <div>
            <HeroSection/>
            <AboutSection/>
            <JourneySection/>
            <SkillSection />
            <GithubPage/>
            <ProjectsSection/>
            <Forms/>
            <Footer/>
        </div>
    )
}