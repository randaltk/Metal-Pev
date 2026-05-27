import Seo from "../components/seo/Seo";
import Hero from "../components/sections/Hero";
import TrustBar from "../components/sections/TrustBar";
import ServicesGrid from "../components/sections/ServicesGrid";
import AboutSnippet from "../components/sections/AboutSnippet";
import NR13Highlight from "../components/sections/NR13Highlight";
import ProcessSteps from "../components/sections/ProcessSteps";
import ProjectsGallery from "../components/sections/ProjectsGallery";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Seo
        title="Caldeiraria, NR-13 e Instalações Industriais"
        description="MetalPev: caldeiraria, vasos de pressão, soldas, escadas, mezaninos e instalações industriais com adequação à NR-13 em São Bernardo do Campo e ABC Paulista."
      />
      <Hero />
      <TrustBar />
      <ServicesGrid
        heading="Soluções industriais completas"
        description="Da inspeção ao laudo final, da fabricação à manutenção corretiva: cobrimos toda a cadeia de equipamentos sob pressão e estruturas metálicas industriais."
      />
      <AboutSnippet />
      <NR13Highlight />
      <ProcessSteps />
      <ProjectsGallery />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
