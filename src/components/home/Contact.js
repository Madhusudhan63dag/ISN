import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // "success", "error", or ""
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);
    try {
      const response = await fetch("https://razorpaybackend-blue.vercel.app/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          website: "ISN Network Pvt Ltd",
          to: "customercareproductcenter@gmail.com",
          subject: `Contact Form - Message from ${form.name}`,
          message: `From: ${form.name} (${form.email})\n\n${form.message}`,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 6000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <section className="bg-gradient-to-b from-[#e6ecfb] to-[#fff8f0] py-8 px-2 sm:px-4 flex justify-center items-center min-h-[calc(100vh-120px)]">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="md:w-2/3 w-full p-4 sm:p-8 flex flex-col justify-center relative">
          <h2 className="text-3xl font-bold text-[#193a6a] mb-6">Get in Touch</h2>
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="Your Name"
            required
            onChange={handleChange}
            className="w-full text-gray-800 bg-[#f8fafc] border border-gray-300 rounded-lg px-4 py-3 mb-3 focus:outline-none focus:ring-2 focus:ring-[#ff8733]"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Your Email"
            required
            onChange={handleChange}
            className="w-full text-gray-800 bg-[#f8fafc] border border-gray-300 rounded-lg px-4 py-3 mb-3 focus:outline-none focus:ring-2 focus:ring-[#ff8733]"
          />
          <textarea
            name="message"
            value={form.message}
            placeholder="Your Message"
            required
            onChange={handleChange}
            rows={5}
            className="w-full text-gray-800 bg-[#f8fafc] border border-gray-300 rounded-lg px-4 py-3 mb-3 focus:outline-none focus:ring-2 focus:ring-[#ff8733]"
          />
          <button
            type="submit"
            className={`mt-3 bg-[#ff8733] text-white font-bold py-3 px-6 rounded-full shadow hover:bg-[#f36100] transition text-lg w-fit flex items-center gap-2 disabled:opacity-60`}
            disabled={loading}
          >
            {loading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
            )}
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[90%] mx-auto flex justify-center z-20">
              <div className="animate-fade-in-down bg-[#f8b065] rounded-xl px-6 py-4 shadow-md text-center text-[#193a6a] font-semibold text-lg transition">
                <span role="img" aria-label="Thank You" className="text-2xl mr-2">🙏</span>
                Thank you for contacting us!
              </div>
            </div>
          )}
          {status === "error" && (
            <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[90%] mx-auto flex justify-center z-20">
              <div className="animate-fade-in-down bg-red-100 rounded-xl px-6 py-4 shadow-md text-center text-red-700 font-semibold text-lg transition">
                Something went wrong. Please try again.
              </div>
            </div>
          )}
        </form>
        {/* Contact Info Side */}
        <div className="md:w-1/3 w-full p-4 sm:p-8 bg-[#193a6a] text-white flex flex-col items-start justify-center">
          <h3 className="text-xl font-bold mb-3">Contact Information</h3>
          <p className="mb-2 text-white/80">Email: <a href="mailto:isnnetworkpvtltd@gmail.com" className="underline hover:text-[#ff8733]"> isnnetworkpvtltd@gmail.com</a></p>
          <p className="mb-2 text-white/80">Phone: <a href="tel:+912346789876" className="underline hover:text-[#ff8733]">+91 234 678 9876</a></p>
          <p className="mb-6 text-white/80">Address: Begumpet, Hyderabad, Telangana</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
