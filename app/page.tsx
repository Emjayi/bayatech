import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Expertise from "@/components/home/Expertise";
import Services from "@/components/home/Services";
import Timeline from "@/components/home/Timeline";
import ElevatorButton from "@/components/home/ElevatorButton";
import Contact from "@/components/home/Contact";
import Customers from "@/components/home/Customers";
import AboutBayatech from "@/components/home/AboutBayatech";
import ElevatorLoading from "@/components/home/paralax_eleveator";
import FadeInUp from "@/components/home/FadeInUp";

export default function Page() {
  return (
    <div className="min-h-screen" dir="ltr">
      {/* Elevator overlays the page but will fade in after the hero via scrollYProgress */}
      <ElevatorLoading />
      <FadeInUp>
        <Header />
      </FadeInUp>
      <FadeInUp delay={0.1}>
        <Hero />
      </FadeInUp>
      <FadeInUp delay={0.2}>
        <Expertise />
      </FadeInUp>
      <FadeInUp delay={0.1}>
        <Services />
      </FadeInUp>
      <FadeInUp delay={0.2}>
        <Timeline />
      </FadeInUp>
      <div className="relative z-50">
        <FadeInUp delay={0.1}>
          <ElevatorButton />
        </FadeInUp>
        <Contact />
        <Customers />
      </div>
    </div>
  );
}