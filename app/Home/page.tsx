"use client";

import React from "react";
import Navbar from "../components/navbar/page";
import Image from "next/image";
import Link from "next/link";
import background from "../asset/Homeasset/bg.png";
import coffe1 from "../asset/Homeasset/cup.png";
import coffe2 from "../asset/Homeasset/cup2.jpg";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative">
      {/* First Section with Background Image */}
      <section className="min-h-screen relative">
        <div className="absolute inset-0">
          <Image
            src={background}
            alt="Background"
            fill
            priority
            className="object-cover"
          />
        </div>

        <Navbar />
        <div className="absolute left-0 z-20 transform translate-y-100 translate-x-40 animate-[slideAndRotate_1s_ease-out]">
          {" "}
          {/* Changed from -translate-r-20 to translate-x-32 */}
          <Image
            src={coffe1}
            alt="Coffee cup"
            width={480}
            height={280}
            style={{ objectFit: "contain" }}
            className="object-contain"
            priority
          />
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-[#f3f4f5] relative z-20">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="flex-1">
              <h2 className="text-[#00B9C6] text-6xl font-bold leading-tight mb-8">
                Lorem.
                <br />
                Lorem, ipsum.
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Dibuat dengan segar, inventif dan teliti, Spill the Beans dengan
                cepat mendefinisikan bagaimana orang dewasa harus memulai hari
                mereka. Kopi kami melampaui ekspektasi dalam hal rasa dan
                keberlanjutan. Makanan yang kami pasangkan dengan secangkir kopi
                Anda sudah cukup menjelaskan semuanya. Olesi salah satu bagel
                buatan kami dengan mentega yang diracik oleh pengrajin atau
                pilihan keju krim buatan sendiri.
              </p>
              <Link
                href="/about"
                className="bg-[#00B9C6] text-white px-8 py-3 rounded inline-block 
                         text-lg font-semibold hover:bg-[#008E99] transition-colors"
              >
                ABOUT US
              </Link>
            </div>
            <div className="flex-1">
              <Image
                src={coffe2}
                alt="Bagel and Coffee"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
