import React, { useState, useEffect } from 'react';
import { Mascot } from './Mascot';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenGetStarted: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGetStarted }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '3D World', href: '#diorama' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Parent Reviews', href: '#reviews' },
    { label: 'Pricing & FAQ', href: '#pricing' },
    { label: 'Community', href: '#community' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FFF8EE]/95 backdrop-blur-md py-3 shadow-sm border-b-2 border-[#1D1A2F]/10'
          : 'bg-[#FFF8EE] py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo: mascot logo + wordmark in Fredoka display font */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A36] rounded-xl px-1"
          aria-label="plearn coding school homepage"
        >
          <div className="w-11 h-11 rounded-2xl bg-[#FFE9D2] border-2 border-[#1D1A2F] flex items-center justify-center shadow-[2px_2px_0px_#1D1A2F] group-hover:scale-105 transition-transform overflow-hidden">
            <img
              src="/assets/plearn-logo.jpg"
              alt="plearn mascot logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[#1D1A2F] group-hover:text-[#FF5A36] transition-colors">
            plearn
          </span>
          <span className="bg-[#FFE9D2] text-[#FF5A36] text-[11px] font-bold px-2.5 py-0.5 rounded-full border-2 border-[#1D1A2F] shadow-[1px_1px_0px_#1D1A2F] hidden lg:inline-block">
            for kids
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#1D1A2F] font-semibold text-base hover:text-[#FF5A36] transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A36] rounded-md"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenGetStarted}
            className="chunky-btn bg-[#FF5A36] text-[#FFF8EE] px-5 sm:px-6 py-2.5 font-display font-semibold text-base sm:text-lg flex items-center gap-2 cursor-pointer"
            aria-label="Get started with plearn coding school"
          >
            <Sparkles className="w-4 h-4" strokeWidth={2.5} />
            <span>Get started</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 rounded-2xl bg-[#FFE9D2] border-2 border-[#1D1A2F] flex items-center justify-center text-[#1D1A2F] shadow-[2px_2px_0px_#1D1A2F] active:translate-y-0.5 cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={2.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-label="Mobile menu"
          className="md:hidden fixed inset-x-0 top-[70px] bg-[#FFF8EE] border-b-2 border-[#1D1A2F] shadow-[0_8px_0_#1D1A2F] px-6 py-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#1D1A2F] font-display font-semibold text-xl py-2 px-3 rounded-xl hover:bg-[#FFE9D2] transition-colors border-2 border-transparent hover:border-[#1D1A2F]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#1D1A2F]/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGetStarted();
                }}
                className="w-full chunky-btn bg-[#FF5A36] text-[#FFF8EE] py-3.5 font-display font-semibold text-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-5 h-5" />
                <span>Get started</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
