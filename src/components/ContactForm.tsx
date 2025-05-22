import React, { useState } from "react";
import FireParticles from "./FireParticles";
import ShinyButton from "./ShinyButton";
import { useRouter } from "next/router";
import Link from "next/link";

const ContactForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setProgress(0);

        // Animate the progress bar
        const interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval);

              // Start fade-out animation
              setFadeOut(true);

              // After fade-out, redirect
              setTimeout(() => {
                //
              }, 100000); // 500ms matches the animation duration
            }
            return prev + 10;
          });
        }, 100);
      } else {
        alert("Message failed to send. Please try again.");
      }
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Background Fire Particles */}
      <FireParticles
        id="fire-particles"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />

      {/* Contact Form Content */}
      <section className="mt-22 container mx-auto p-8 relative z-10 text-center text-white">
        <h2 className="text-4xl font-bold mb-4 drop-shadow-md">
          {!success ? "Contact Me 🔥" : ""}
        </h2>
        <p className="text-lg max-w-xl mb-8 mx-auto drop-shadow-md">
          {!success ? (
            "Have a question or want to work together? Drop me a message below."
          ) : (
            <h2 className="mt-30 pt-3">
              <Link
                href="/"
                className="inline-block px-8 py-4 border-4 border-dotted border-orange-500 text-orange-500 hover:bg-orange-300 hover:text-white transition-all duration-300"
              >
                We will get back to you as soon as possible!! <br /> 🔥 Go Back
                Home 🔥
              </Link>
            </h2>
          )}
        </p>

        {/* Success Bar with Fade-Out Animation */}
        {success && (
          <div
            className={`flex justify-center w-75 max-w-xl mx-auto mb-4 transition-opacity duration-12000 ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="bg-gray-800 p-2 rounded-lg">
              <p className="text-orange-500 font-bold text-lg mb-2">
                Message Sent Successfully!
              </p>

              {/* Progress Bar Container */}
              <div className="relative w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <div
                  className={`absolute top-0 left-0 h-2 bg-orange-500 rounded-full transition-all duration-[3000ms] ${
                    progress >= 100 ? "animate-bounce" : ""
                  }`}
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Contact Form */}
        {!success && (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-8 rounded-lg shadow-md space-y-4 border border-gray-700 max-w-xl mx-auto"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-500 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-500 transition"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-500 transition"
            />

            <div className="mt-4">
              <ShinyButton
                label={isSubmitting ? "Submitting..." : "Send Message"}
              />
            </div>
          </form>
        )}
      </section>
    </>
  );
};

export default ContactForm;
