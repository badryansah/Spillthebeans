"use client";

import React from "react";
import Navbar from "../components/navbar/page";
import Image from "next/image";
import background from "../asset/Homeasset/background.jpg";
import coffe1 from "../asset/Homeasset/cup.png";
import "../styles/animations.css";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={background}
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>
      <Navbar />

      <main className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <div className="relative w-full max-w-7xl flex items-center justify-center">
            {/* Text Outline - Made Bigger and Thinner */}
            <h1
              className="text-[250px] font-serif tracking-wider leading-[0.9] text-center select-none relative"
              style={{
                fontFamily: "serif",
                WebkitTextStroke: "2px #2563EB",
                color: "transparent",
                letterSpacing: "0.02em",
                zIndex: 20,
                position: "relative",
              }}
            >
              <span className="block animate-text">Spill The</span>
              <span
                className="block animate-text delay-300"
                style={{ marginTop: "30px" }}
              >
                Beans
              </span>
            </h1>
            {/* Floating Cups - Added Animations */}
            <div className="absolute -top-5 -left-32 z-10 animate-slide-from-left">
              <Image
                src={coffe1}
                alt="Coffee cup 1"
                width={600}
                height={700}
                style={{ objectFit: "contain" }}
                className="drop-shadow-2xl "
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
