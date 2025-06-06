"use client";

import React from "react";
import Navbar from "../components/navbar/page";
import Image from "next/image";
import coffe1 from "../asset/Homeasset/coffe1.png";
import coffe2 from "../asset/Homeasset/coffe2.png";
import "../styles/animations.css";

const Home = () => {
  return (
    <div className="min-h-screen relative bg-white overflow-hidden">
      <Navbar />

      <main className="container mx-auto px-6 py-12">
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
                className="drop-shadow-2xl opacity-95"
                priority
              />
            </div>
            <div className="absolute -top-50 -right-36 z-10 animate-slide-from-right">
              <Image
                src={coffe2}
                alt="Coffee cup 2"
                width={600}
                height={700}
                style={{ objectFit: "contain" }}
                className="drop-shadow-2xl opacity-95"
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
