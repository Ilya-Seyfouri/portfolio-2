"use client"

import ilya2 from "@/images/ilya3.jpg"
import Image from "next/image";

export default function Hero(){

    return (
      <>
        <section id="home">
          <div className="container mx-auto">
            <div className="pt-35">
              <div className="flex justify-center items-center">
                <h2 className="text-4xl md:text-7xl">Hi, I'm Ilya</h2>
              </div>
              <div className="pt-6 flex justify-center items-center">
                <h2 className="text-4xl md:text-7xl items-center">software engineer.</h2>
              </div>
              <div className="pt-4 lg:pt-10 flex justify-center items-center">
                <p className="text-lg md:text-2xl items-center">computer science & ai @ newcastle university</p>
              </div>

              <div className="pt-14 md:pt-10 flex justify-center items-center md:pb-30">
                <Image
                src={ilya2}
                alt="logo"
                className="rounded-4xl  h-90 md:h-90 w-auto"
                />

              </div>




            </div>
          </div>
        </section>
      </>
    );
}