/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DioramaSection } from './components/DioramaSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ProofSection } from './components/ProofSection';
import { PricingSection } from './components/PricingSection';
import { CommunitySection } from './components/CommunitySection';
import { FooterSection } from './components/FooterSection';
import { SectionDivider } from './components/SectionDivider';
import { GetStartedModal } from './components/GetStartedModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenGetStarted = () => {
    setIsModalOpen(true);
  };

  const handleCloseGetStarted = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8EE] text-[#1D1A2F] selection:bg-[#FFE9D2] selection:text-[#FF5A36]">
      {/* 1. Sticky Navigation */}
      <Navbar onOpenGetStarted={handleOpenGetStarted} />

      <main className="grow">
        {/* 2. Hero Section: Playful Sticker Hero */}
        <HeroSection onOpenGetStarted={handleOpenGetStarted} />

        {/* Gentle wave join from Hero (#FFF8EE) into Diorama (#FFE9D2) */}
        <SectionDivider fillColor="#FFE9D2" type="wave" />

        {/* 3. 3D moment: Isometric Diorama with 3 interactive hotspots */}
        <DioramaSection />

        {/* Rounded join from Diorama (#FFE9D2) into How-It-Works (#FFF8EE) */}
        <SectionDivider fillColor="#FFF8EE" type="rounded" />

        {/* 4. Features: How-it-works Steps (3 numbered steps joined by dotted line) */}
        <HowItWorksSection />

        {/* Wave join from How-It-Works (#FFF8EE) into Proof (#7B61FF) */}
        <SectionDivider fillColor="#7B61FF" type="wave" />

        {/* 5. Proof: Key numbers and parent testimonials */}
        <ProofSection />

        {/* Rounded join from Proof (#7B61FF) into Pricing (#FFF8EE) */}
        <SectionDivider fillColor="#FFF8EE" type="rounded" />

        {/* 6. Pricing: One Plan + FAQ */}
        <PricingSection onOpenGetStarted={handleOpenGetStarted} />

        {/* Wave join from Pricing (#FFF8EE) into Community CTA (#FF5A36) */}
        <SectionDivider fillColor="#FF5A36" type="wave" />

        {/* 7. Call to Action: Join the Community */}
        <CommunitySection />

        {/* Slant/Wave join from Community CTA (#FF5A36) into Footer (#FFE9D2) */}
        <SectionDivider fillColor="#FFE9D2" type="rounded" />
      </main>

      {/* 8. Footer: Sitemap + Newsletter + Status */}
      <FooterSection />

      {/* Interactive Get Started Onboarding / Trial Modal */}
      <GetStartedModal isOpen={isModalOpen} onClose={handleCloseGetStarted} />
    </div>
  );
}
