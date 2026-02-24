"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#EDFBFD] w-full">
      {/* Navigation Bar */}
      <nav className="bg-white h-16 w-full px-4 py-4 flex justify-start items-center">
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#products" className="hover:text-[#1E3A5F] transition-colors">
            دسته بندی
          </a>
          <a href="#products" className="hover:text-[#1E3A5F] transition-colors">
            محصولات
          </a>
          <Link
              href="/about"
              className="hover:text-[#1E3A5F] transition-colors"
            >
              درباره ما
          </Link>
            <a
              href="#about"
              className="hover:text-[#1E3A5F] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              تایم لاین
            </a>
          <a href="#contact" className="hover:text-[#1E3A5F] transition-colors">
            تماس با ما
          </a>
          <a href="#customers" className="hover:text-[#1E3A5F] transition-colors">
            مشتریان ما
          </a>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#E8F4F8] border-t border-gray-300">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a
              href="#products"
              className="hover:text-[#1E3A5F] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              محصولات
            </a>
            <a
              href="#about-bayatech"
              className="hover:text-[#1E3A5F] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              درباره ما
            </a>
            <a
              href="#about"
              className="hover:text-[#1E3A5F] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              تایم لاین
            </a>
            <a
              href="#contact"
              className="hover:text-[#1E3A5F] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              تماس با ما
            </a>
            <a
              href="#customers"
              className="hover:text-[#1E3A5F] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              مشتریان ما
            </a>
          </div>
        </div>
      )}

    </header>
  );
}

