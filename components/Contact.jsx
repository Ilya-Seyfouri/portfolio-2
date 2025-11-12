"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ user_name: "", user_email: "", message: "" });

      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact">
      <div className="container mx-auto px-4">
        <div className="flex justify-center pt-40 md:pt-5">
          <h2 className="text-5xl md:text-6xl font-bold">Contact.</h2>
        </div>

        <div className="flex justify-center pt-15">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl md:px-10 space-y-6"
          >
            <div className="relative px-10">
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-6 py-4 rounded-2xl border-2 border-white/20 bg-black/50 text-white placeholder-white/50 focus:border-pink-500 focus:outline-none transition-all duration-300"
              />
            </div>

            <div className="relative px-10 pt-2">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                required
                className="w-full px-6 py-4 rounded-2xl border-2 border-white/20 bg-black/50 text-white placeholder-white/50 focus:border-pink-500 focus:outline-none transition-all duration-300 resize-none"
              />
            </div>

            <div className="flex justify-center md:pt-5 pb-30">
              <button
                type="submit"
                className="px-32 md:px-48 py-4 font-bold text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br hover:scale-105 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 rounded-lg text-sm text-center me-2 mb-2 active:scale-95 transition-transform"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
