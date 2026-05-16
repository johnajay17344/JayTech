import HeroSection from "@/components/section/hero";
import AboutSection from "@/components/section/about";
import JourneySection from "@/components/section/journey";
import SkillSection from "@/components/section/skill"
export default function Page(){
    return(
        <div>
            <HeroSection/>
            <AboutSection/>
            <JourneySection/>
            <SkillSection />
        </div>
    )
}