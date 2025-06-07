"use client";

import React from "react";
import Navbar from "../components/navbar/page";
import Image from "next/image";
import { motion } from "framer-motion";

import background from "../asset/Homeasset/bg.png";
import coffe1 from "../asset/Homeasset/cup.png";
import coffe2 from "../asset/Homeasset/cup2.jpg";
import foto1 from "../asset/gallery/foto1.jpg";
import foto2 from "../asset/gallery/foto2.jpg";
import foto3 from "../asset/gallery/foto3.jpg";
import foto4 from "../asset/gallery/foto4.jpg";
import foto5 from "../asset/gallery/foto5.jpg";
import foto6 from "../asset/gallery/foto6.jpg";
import foto7 from "../asset/gallery/foto7.jpg";
import foto8 from "../asset/gallery/foto8.jpg";
import foto9 from "../asset/gallery/foto9.jpg";
import foto10 from "../asset/gallery/foto10.jpg";

const galleryImages = [
  foto1,
  foto2,
  foto3,
  foto4,
  foto5,
  foto6,
  foto7,
  foto8,
  foto9,
  foto10,
];

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f3f4f5] overflow-x-hidden">
      {/*  Background  */}
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

        <div className="absolute left-0 z-10 transform translate-y-85 translate-x-45 animate-[slideAndRotate_1s_ease-out] pointer-events-none">
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

      {/* 1 Section */}
      <section className="bg-[#f3f4f5] relative z-20">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-[#00B9C6] text-6xl font-bold leading-tight mb-8">
                Lorem.
                <br />
                Lorem, ipsum.
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                eum omnis commodi provident corrupti inventore consectetur!
                Dolorum, ex consequuntur quod rem doloremque ullam! Eius debitis
                dolor nisi aspernatur iusto facilis molestias minus ex harum
                possimus, alias optio, qui cupiditate non distinctio aliquam.
                Minima, illo praesentium.
              </p>
            </motion.div>
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src={coffe2}
                alt="Bagel and Coffee"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* 2 Section */}
      <section className="bg-[#f3f4f5] py-16">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <a
            href="https://www.instagram.com/spillthebeans_id/"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase text-sm tracking-widest font-bold text-black underline"
          >
            Follow
          </a>
          <h2 className="text-5xl md:text-6xl font-bold tracking-widest mt-2 mb-2 font-poppins text-black">
            SpillTheBeans
          </h2>
          <div className="uppercase text-lg font-bold tracking-widest text-black mb-6">
            On Instagram
          </div>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              className="aspect-square overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.07 }}
            >
              <Image
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
