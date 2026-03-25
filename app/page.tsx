"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingCTA } from "@/components/layout/floating-cta";
import { AssistantModal } from "@/components/modals/assistant-modal";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Doctors } from "@/components/sections/doctors";
import { Team } from "@/components/sections/team";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { BeforeAfter } from "@/components/sections/before-after";
import { Stories } from "@/components/sections/stories";
import { FAQ } from "@/components/sections/faq";
import { CTABanner } from "@/components/sections/cta-banner";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  return (
    <>
      <Navbar onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <Services onOpenModal={openModal} />
        <Doctors />
        <Team />
        <Features />
        <Pricing onOpenModal={openModal} />
        <Testimonials />
        <BeforeAfter />
        <Stories />
        <FAQ />
        <CTABanner onOpenModal={openModal} />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA onClick={openModal} />
      <AssistantModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}
