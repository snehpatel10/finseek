"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";

const HeroSection = () => {

    const imageRef = useRef()

    useEffect(() => {
        const imageElement = imageRef.current;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;

            if(scrollPosition > scrollThreshold){
                imageElement.classList.add("scrolled")
            }
            else {
                imageElement.classList.remove("scrolled")
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll",handleScroll)
    })

  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <Badge className='bg-[#efdaf4] text-[#642b73] mb-6'>Manage expenses. Simplify life.</Badge>
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          Manage your Finances <br /> with Intelligence
        </h1>
        <p className="mx-auto max-w-2xl text-gray-500 mb-8 md:text-xl/relaxed">
          {" "}
          An AI-powered financial platform that tracks, analyzes, and optimizes
          your finances in real time—so you can stay in control.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
              <ArrowRight />
            </Button>
          </Link>
          <Link href="#howItWorks">
            <Button size="lg" variant='outline' className="px-8">
              See How It Works
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper">
            <div ref={imageRef} className="hero-image aspect-[16/9]">
                <Image src='/banner.jpeg' className="rounded-lg shadow-2xl border mx-auto" width="1100" height="720" alt="Dashboard preview" priority />
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
