"use client";
import { useState } from "react";

export default function Contact() {
  const [notification, setNotification] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://formspree.io/f/xblgllbe", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setNotification({ type: "success", message: "Message sent successfully!" });
        event.target.reset(); // Reset form fields
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      setNotification({ type: "error", message: "Error sending message. Please try again." });
    }

    setTimeout(() => setNotification(null), 5000); // Remove notification after 5 sec
  };

  return (
    <div className="pt-20 flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white">
      <div className="w-full max-w-2xl p-10 bg-white/10 backdrop-blur-md shadow-lg rounded-xl">
        <h1 className="text-4xl font-bold text-center">Contact Me</h1>
        <p className="text-gray-300 text-center mt-2">Feel free to reach out to me!</p>

        {/* Notification Message */}
        {notification && (
          <div
            className={`mt-4 text-center p-3 rounded-md ${
              notification.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {notification.message}
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-6">
          {/* Name Field */}
          <div className="mb-6">
            <label className="block text-gray-300 font-medium text-lg">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full mt-2 px-5 py-3 bg-white/20 text-white border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label className="block text-gray-300 font-medium text-lg">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full mt-2 px-5 py-3 bg-white/20 text-white border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label className="block text-gray-300 font-medium text-lg">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full mt-2 px-5 py-3 bg-white/20 text-white border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
