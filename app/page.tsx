"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { openVoiceflowChat } from "@/components/voiceflow-chat";
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
  return (
    <>
      <Navbar onOpenModal={openVoiceflowChat} />
      <main>
        <Hero onOpenModal={openVoiceflowChat} />
        <Services onOpenModal={openVoiceflowChat} />
        <Doctors />
        <Team />
        <Features />
        <Pricing onOpenModal={openVoiceflowChat} />
        <Testimonials />
        <BeforeAfter />
        <Stories />
        <FAQ />
        <CTABanner onOpenModal={openVoiceflowChat} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
