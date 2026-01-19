import React, { useState } from "react";
import { RevealOnScroll } from "./ui/RevealOnScroll";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Briefcase,
  Copy,
  Check,
} from "lucide-react";

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwAKoN6ilq2XsBH2Qeexy67heO30Hm3RTH8KQA7bcj7G54xV_TjPJl_NtZGBB1wbnP25w/exec", {
        method: "POST",
        body: new FormData(e.currentTarget),
      });

      // Assume success
      setSubmitted(true);
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      //   alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText("info.talmade@gmail.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <section id="contact" className="py-20 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <RevealOnScroll>
              <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-3">
                Contact Us
              </span>
              <h2 className="text-4xl font-display font-bold tracking-tighter mb-5">
                Send us your Enquiry
              </h2>
              <p className="text-gray-600 mb-7">
                Fill out a short application to secure your consultation slot.
                Our online application is free, and no special documentation is
                required for the initial chat.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold">Tell us about your needs</h4>
                    <p className="text-gray-500 text-sm">
                      Quantity, fabric preference, and timeline.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 text-black rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold">Get a Custom Quote</h4>
                    <p className="text-gray-500 text-sm">
                      We'll provide a detailed breakdown within 24 hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Compact Join Us Section */}
              <div className="mt-6">
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-black text-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        Career Opportunities
                      </h4>
                      <p className="text-xs text-gray-500">
                        Join our mission-driven team
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Looking to build a meaningful career in sustainable
                    manufacturing? We're always seeking talented individuals
                    passionate about quality and innovation.
                  </p>

                  <div className="mb-3">
                    <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-2.5">
                      <span className="font-medium text-gray-700 text-sm">
                        info.talmade@gmail.com
                      </span>
                      <button
                        onClick={handleCopyEmail}
                        className="flex items-center gap-1.5 bg-black text-white hover:bg-gray-800 text-xs font-medium py-1.5 px-3 rounded transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    Submit your resume/CV to the email above
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <div className="lg:w-1/2 bg-gray-50 p-6 md:p-10 rounded-2xl shadow-inner">
            <RevealOnScroll delay={200}>
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-5">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Request Received!</h3>
                  <p className="text-gray-600 text-sm">
                    We'll be in touch regarding your uniform requirements
                    shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 px-5 py-1.5 text-black border border-black rounded-full hover:bg-black hover:text-white transition-colors text-sm"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-white border-b-2 border-gray-200 p-2.5 focus:outline-none focus:border-black transition-colors text-sm"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5"
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-white border-b-2 border-gray-200 p-2.5 focus:outline-none focus:border-black transition-colors text-sm"
                      placeholder="jane@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mobile"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      className="w-full bg-white border-b-2 border-gray-200 p-2.5 focus:outline-none focus:border-black transition-colors text-sm"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      className="w-full bg-white border-b-2 border-gray-200 p-2.5 focus:outline-none focus:border-black transition-colors text-sm"
                      placeholder="Enter your Company Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5"
                    >
                      Enquiry Details (Quantity, Type)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      className="w-full bg-white border-b-2 border-gray-200 p-2.5 focus:outline-none focus:border-black transition-colors resize-none text-sm"
                      placeholder="We need 500 polo shirts..."
                    ></textarea>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-black text-white font-medium py-3 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 group text-sm"
                    >
                      {loading ? "Sending..." : "Submit Request"}
                      {!loading && (
                        <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      )}
                    </button>
                    <p className="text-xs text-center text-gray-400 mt-3 flex items-center justify-center gap-1">
                      <AlertCircle className="w-2.5 h-1.5" />
                      Data is securely processed via Google Forms
                    </p>
                  </div>
                </form>
              )}
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
