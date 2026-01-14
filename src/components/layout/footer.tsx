import React from "react";
import Image from "next/image";

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
            href="https://www.facebook.com/MarciHomes/"
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
            href="https://www.instagram.com/marciandlauren_nvrealtors/"
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
            href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHOJNLF_UT7lwAAAZu6D7gYq9YjE0gzCkSyuTIHh7v8ttmjXfS3MQfrUuI2UA97bEEfLYo9-m7Ppo_CcKk7vlhQSyQ_apLXVzIDHLfa1VsWNm0uzyhP6NTfKEpKJ127vZs5k-M=&original_referer=https://marcimetzger.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmarci-metzger-30642496%2F"
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
            href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump"
            className="group relative w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:border-white transition-all duration-300 overflow-hidden"
          >
            <Image
              src="/yelp1.svg"
              alt="Yelp default"
              width={20}
              height={20}
              className="w-4 h-4 group-hover:hidden"
            />
            <Image
              src="/yelp.svg"
              alt="Yelp hover"
              width={20}
              height={20}
              className="w-4 h-4 hidden group-hover:block"
            />
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
