import React, { useState } from 'react';
import { Mascot } from './Mascot';
import { Send, CheckCircle2 } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const columns = [
    {
      title: 'Product',
      links: [
        { label: 'Ages 7–9: Story Blocks', href: '#how-it-works' },
        { label: 'Ages 10–12: Arcade Games', href: '#how-it-works' },
        { label: 'Ages 13–14: Python & Web', href: '#how-it-works' },
        { label: '3D Isometric Sandbox', href: '#diorama' },
        { label: 'Student Showcase Arcade', href: '#reviews' },
        { label: 'Curriculum Roadmap', href: '#pricing' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Our Philosophy', href: '#' },
        { label: 'Meet the Mentors', href: '#' },
        { label: 'Child Safety & COPPA', href: '#' },
        { label: 'Careers & Mentor Roles', href: '#' },
        { label: 'Press & Media Kit', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Parent Guide to Coding', href: '#' },
        { label: 'Free Weekend Starters', href: '#' },
        { label: 'Game Jam Calendar', href: '#' },
        { label: 'Sound & Pixel Assets', href: '#' },
        { label: 'Help & FAQ', href: '#pricing' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Student Data Promise', href: '#' },
        { label: 'Refund Policy', href: '#pricing' },
        { label: 'Cookie Preferences', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-[#FFE9D2] border-t-2 border-[#1D1A2F] pt-16 pb-12 text-[#1D1A2F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Newsletter Card */}
        <div className="chunky-card bg-[#FFF8EE] p-8 sm:p-10 mb-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#1D1A2F] mb-2">
                "The Weekly Maker"
              </h3>
              <p className="text-[#1D1A2F] text-base sm:text-lg leading-relaxed font-semibold">
                One bite-sized, screen-positive coding puzzle, video guide, and
                creative weekend project for your child every Thursday.
              </p>
            </div>

            <div className="md:col-span-5">
              {subscribed ? (
                <div className="bg-[#FFE9D2] border-2 border-[#1D1A2F] p-4 rounded-2xl flex items-center gap-3 text-[#1D1A2F] font-display font-bold shadow-[2px_2px_0px_#1D1A2F]">
                  <CheckCircle2 className="w-6 h-6 text-[#FF5A36] shrink-0" />
                  <span>You're in! Check your inbox this Thursday.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="parent@email.com"
                      required
                      className="bg-[#FFE9D2]/50 border-2 border-[#1D1A2F] rounded-2xl px-4 py-3 text-sm text-[#1D1A2F] placeholder-[#1D1A2F]/60 focus:outline-none focus:ring-2 focus:ring-[#FF5A36] grow shadow-[2px_2px_0px_#1D1A2F]"
                    />
                    <button
                      type="submit"
                      className="chunky-btn bg-[#FF5A36] text-[#FFF8EE] px-5 py-3 font-display font-bold text-sm shrink-0 flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_#1D1A2F]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Join</span>
                    </button>
                  </div>
                  <span className="text-[11px] text-[#1D1A2F] font-bold">
                    No spam ever. Unsubscribe with one click anytime.
                  </span>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 4 Sitemap Columns + Brand Info */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10 mb-14">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="#"
              className="inline-flex items-center gap-2.5 mb-3 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#FFF8EE] border-2 border-[#1D1A2F] flex items-center justify-center shadow-[2px_2px_0px_#1D1A2F] overflow-hidden group-hover:scale-105 transition-transform">
                <img
                  src="/assets/plearn-logo.jpg"
                  alt="plearn mascot logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-bold text-2xl text-[#1D1A2F] group-hover:text-[#FF5A36] transition-colors">
                plearn
              </span>
            </a>
            <p className="text-sm text-[#1D1A2F] leading-relaxed mb-4 font-semibold">
              A playful coding school for kids with fun after-school courses and
              patient mentors.
            </p>
            <div className="inline-block bg-[#FFF8EE] border-2 border-[#1D1A2F] px-3 py-1 rounded-xl text-xs font-bold text-[#1D1A2F] shadow-[1px_1px_0px_#1D1A2F]">
              Ages 7–14
            </div>
          </div>

          {/* 4 Link Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-bold text-base sm:text-lg text-[#1D1A2F] mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#1D1A2F] hover:text-[#FF5A36] transition-colors font-bold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row: Copyright, Status, Socials */}
        <div className="pt-8 border-t-2 border-[#1D1A2F]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#1D1A2F] font-bold">
          <div>
            © 2026 plearn Inc. All rights reserved. Built with joy for kids.
          </div>

          {/* System Status Link */}
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#FFF8EE] border border-[#1D1A2F] px-3 py-1 rounded-full text-xs font-display font-bold text-[#1D1A2F] shadow-[1px_1px_0px_#1D1A2F] hover:bg-[#FFE9D2] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>All systems playful</span>
          </a>

          {/* Social Links with standard labels */}
          <div className="flex items-center gap-3">
            {[
              { label: 'YouTube', href: '#' },
              { label: 'Discord', href: '#community' },
              { label: 'GitHub', href: '#' },
              { label: 'Instagram', href: '#' },
            ].map((soc) => (
              <a
                key={soc.label}
                href={soc.href}
                className="w-8 h-8 rounded-xl bg-[#FFF8EE] border border-[#1D1A2F] flex items-center justify-center text-xs font-display font-bold text-[#1D1A2F] hover:bg-[#FF5A36] hover:text-white transition-colors shadow-[1px_1px_0px_#1D1A2F]"
                aria-label={`Visit plearn on ${soc.label}`}
              >
                {soc.label[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
