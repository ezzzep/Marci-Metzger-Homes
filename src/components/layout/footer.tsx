import React from "react";

const Footer = () => (
  <footer className="bg-neutral-950 text-white py-12 border-t border-neutral-800 relative">
    <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
        <div className="text-center md:text-left">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight leading-none text-white">
            MARCI <span className="italic text-neutral-500">METZGER</span>
          </h2>
          <p className="text-neutral-500 text-[10px] uppercase tracking-[0.2em] font-mono mt-2">
            The Ridge Realty Group
          </p>
        </div>

        <div className="flex justify-center md:justify-end items-center gap-3">
          <a
            href="#"
            className="group relative w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:border-white transition-all duration-300"
          >
            <svg
              className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5L14.5.5C10.1.5 9.35 3.5 9.35 5.6V7.5H6.5v3.6h2.85V22h5.15V11.1h3.4l.5-3.2h-3.9z" />
            </svg>
          </a>

          <a
            href="#"
            className="group relative w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:border-white transition-all duration-300"
          >
            <svg
              className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          <a
            href="#"
            className="group relative w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:border-white transition-all duration-300"
          >
            <svg
              className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          <a
            href="#"
            className="group relative w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:border-white transition-all duration-300"
          >
            <svg
              className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.426 4.672c.613-1.664.808-2.568.603-2.835-.192-.258-.754-.332-1.537-.195-.076.015-.139.025-.184.038l-4.758 1.391c-1.635.48-2.335.834-2.647 1.229-.312.394-.426 1.057-.537 2.441l-.258 3.293c-.023.299-.045.549-.045.75 0 4.771 3.775 8.7 8.5 8.7s8.5-3.929 8.5-8.7c0-.201-.022-.451-.045-.75l-.258-3.293c-.111-1.384-.225-2.047-.537-2.441-.312-.395-1.012-.749-2.647-1.229l-4.758-1.391c-.045-.013-.108-.023-.184-.038-.783-.137-1.345-.063-1.537.195-.205.267-.01 1.171.603 2.835l2.3 6.226c.278.753.424 1.073.762 1.073s.484-.32.762-1.073l2.3-6.226zm-.426 14.328c-4.418 0-8-3.49-8-7.8 0-.015 0-.03.002-.045.002-.015.002-.03.002-.045 0-4.31-3.582-7.8-8-7.8-4.418 0-8 3.49-8 7.8s3.582 7.8 8 7.8c4.418 0 8-3.49 8-7.8 0-.015 0-.03-.002-.045-.002-.015-.002-.03-.002-.045 0-4.31-3.582-7.8-8-7.8z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="w-full border-t border-neutral-800 mb-6 opacity-50"></div>

      <div className="text-center">
        <p className="text-neutral-600 text-[10px] font-mono uppercase tracking-[0.15em]">
          Copyright © 2023 Marci METZGER Homes - All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
