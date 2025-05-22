import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResumeSection from "@/components/ResumeSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <main className="bg-black text-white min-h-[70vh]">
        <HeroSection />
      </main>
      {/* About Section */}
      <AboutSection />

      {/* Resume Section */}
      <ResumeSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />
    </>
  );
}
