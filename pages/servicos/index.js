import Seo from "../../components/seo/Seo";
import PageHero from "../../components/sections/PageHero";
import ServicesGrid from "../../components/sections/ServicesGrid";
import ProcessSteps from "../../components/sections/ProcessSteps";
import CTASection from "../../components/sections/CTASection";

export default function ServicosIndex() {
  return (
    <>
      <Seo
        title="Serviços de caldeiraria, NR-13 e instalações industriais"
        description="Conheça os serviços da MetalPev: caldeiras, vasos de pressão, tubulações, válvulas, escadas e mezaninos, manifolds, soldas, inspeção e adequação NR-13."
      />
      <PageHero
        eyebrow="Soluções industriais"
        title="Serviços para indústrias que levam segurança a sério."
        description="Da fabricação à inspeção, do projeto ao laudo final: cobrimos toda a cadeia de caldeiraria, vasos de pressão e instalações industriais — com adequação total à NR-13."
        breadcrumbs={[{ label: "Serviços" }]}
      />
      <ServicesGrid heading="Catálogo completo" description="Clique em um serviço para conhecer detalhes técnicos, escopo e como podemos ajudar sua planta." tone="light" />
      <ProcessSteps />
      <CTASection />
    </>
  );
}
