import React from "react";
import SectionTitle from "../global/SectionTitle";
import { testimonials } from "@/data/content/home";

function Testimonials() {
  return (
    <div id="learnmore" className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto">
      <SectionTitle title="About Me" />
      <div className="max-w-5xl m-auto grid grid-cols-1 gap-10 md:gap-10 md:grid-cols-2 items-start">
        {/* Personal Description */}
        <div className="relative bg-fun-pink-darker border border-fun-pink-light p-5 rounded-lg h-full">
          <p className="text-base italic relative testimonialQuote">
            "I'm a passionate full-stack developer dedicated to crafting captivating web experiences. My love for coding and creativity drives my enthusiasm for creating seamless and innovative solutions. With a strong foundation in both front-end and back-end technologies, I bring a unique blend of skills to every project."
          </p>
        </div>

        {/* Education Details */}
        <div className="relative bg-fun-pink-darker border border-fun-pink-light p-5 rounded-lg h-full">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-fun-white">Master's Degree</h3>
            <p className="text-base text-fun-gray">
              <span className="font-monospace text-fun-pink">Degree:</span> Master of Science in Computer Science
              <br />
              <span className="font-monospace text-fun-pink">Institution:</span> Stevens Institute of Technology
              <br />
              <span className="font-monospace text-fun-pink">Graduation Year:</span> 2023
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-fun-white">Bachelor's Degree</h3>
            <p className="text-base text-fun-gray">
              <span className="font-monospace text-fun-pink">Degree:</span> Bachelor of Science in Computer Science
              <br />
              <span className="font-monospace text-fun-pink">Institution:</span> Sreyas Institute of Technology
              <br />
              <span className="font-monospace text-fun-pink">Graduation Year:</span> 2019
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
