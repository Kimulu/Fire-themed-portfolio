import React from "react";
import ShinyButton from "./ShinyButton";
import toast from "react-hot-toast";

const AboutSection = () => {
  const handleDownload = () => {
    toast.success("🔥 Download started!");
  };
  return (
    <div className="mt-10 px-2 py-10 w-full flex justify-center relative z-6">
      <div className="bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
        <div className="lg:w-1/2">
          <div
            className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97')",
            }}
          />
        </div>
        <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
          <h2 className="text-2xl text-white font-bold">
            Get to Learn More <span className="text-orange-400">About Me</span>
            <br />
            and how I operate
          </h2>
          <p className="mt-4 text-gray-300">
            I am Michael Kimulu, a passionate software developer dedicated to
            building responsive and user-friendly web applications. With
            experience in modern web technologies, I strive to deliver
            high-quality solutions that meet client expectations.
          </p>
          <div className="mt-8">
            {/* Button to Download CV */}
            <a
              href="/Michael_Kimulu_CV_2026.pdf"
              download="Michael_Kimulu_CV_2026.pdf"
              className="inline-block"
              onClick={handleDownload}
            >
              <ShinyButton label="Download CV" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
