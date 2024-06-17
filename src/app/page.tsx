"use client"

import Navbar from "@/components/Navbar";
import { cn } from "../utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Graphicdesign from "@/components/graphicdesign";
import { LampDemo } from "@/components/ui/lamp";

import { FlipWords } from "../components/ui/flip-words";

import Service from "../components/services"

import ServBox from "../components/serv-box"

import HoverBorderGradient from "@/components/ui/anim-btn";
import SparklesPreview from "@/components/spark-title";
import Faq from "../components/Faq";
import TextGenerateEffectDemo from "@/components/textgen";
import Calend from "@/components/calend";
import GlobeDemo from "@/components/gitglobe";
GlobeDemo

Calend

TextGenerateEffectDemo


Faq


SparklesPreview

HoverBorderGradient

LampDemo

Graphicdesign

BackgroundBeams


export default function Home() {
  const words = ["better", "cute", "beautiful", "modern"];
  return (
    <div>
      <div className="h-[40rem] w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Navbar />
        <div className=" p-4 mt-5 max-w-7xl  mx-auto relative z-10  w-full pt-[200px] md:pt-0">
          <h1 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Spotlight <br /> is the new trend.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Spotlight effect is a great way to draw attention to a specific part
            of the page. Here, we are drawing the attention towards the text
            section of the page. I don&apos;t know why but I&apos;m running out of
            copy.
          </p>

        </div>
        <BackgroundBeams />
      </div>

      <Graphicdesign />
      <LampDemo />

      <Service />
      <ServBox />

      {/* faq */}
      <div>
        <div className="bg-black p-3">
          <div className=" grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto ">
          <div>
            <SparklesPreview />
          </div>
          <div className="p-4 md:mt-[100px]">
            <Faq />
          </div>
          </div>
        </div>
      </div>
      {/* book calender */}

      <div>
        <div className="max-w-6xl mx-auto p-5 py-[50px] flex flex-col md:flex-row items-center gap-4">
          <div className=" md:w-[40%] w-full flex items-center justify-center">
            {/* calender */}
           <Calend />
          </div>
          <div className="md:w-[60%] w-full">
            {/* text infor */}
            <TextGenerateEffectDemo />
            <div className=" flex mx-auto md:h-[300px] h-[160px] overflow-hidden flex-col  items-center justify-center ">
              <div className="md:mt-[40px] w-full mt-[-190px]">
                <GlobeDemo />
              </div>
                
            </div>
           
          </div>
        </div>
      </div>




    </div>
  );
}
