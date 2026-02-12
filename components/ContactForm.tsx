import React, { useState } from "react";
import { RevealOnScroll } from "./ui/RevealOnScroll";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Briefcase,

} from "lucide-react";

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwAKoN6ilq2XsBH2Qeexy67heO30Hm3RTH8KQA7bcj7G54xV_TjPJl_NtZGBB1wbnP25w/exec",
        {
          method: "POST",
          body: new FormData(e.currentTarget),
        }
      );
      setSubmitted(true);
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };



  const inputClasses = (name: string) =>
    `w-full bg-gray-50 border-2 rounded-lg p-3 text-sm transition-all duration-300 outline-none ${focusedField === name
      ? "border-black shadow-md bg-white translate-x-1"
      : "border-transparent hover:border-gray-200"
    }`;

  const labelClasses = "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5 ml-1";

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-gray-50 text-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative">

        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-0 right-40 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

        <div className="flex flex-col lg:flex-row gap-16 relative z-10">

          {/* Left Side: Context & Info */}
          <div className="lg:w-5/12 space-y-8">
            <RevealOnScroll>
              <span className="inline-block py-1 px-3 rounded-full bg-black/5 text-black text-xs font-bold tracking-widest uppercase mb-4 border border-black/10">
                Contact Us
              </span>
              <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tighter mb-6 leading-none">
                Let's Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
                  Something Great.
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Ready to elevate your brand's uniform? Fill out the form to secure your consultation slot.
                Our process is streamlined, transparent, and designed for your success.
              </p>

              {/* <div className="space-y-6">
                <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
                  <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-lg group-hover:text-black transition-colors">Tell us about your needs</h4>
                    <p className="text-gray-500 text-sm mt-1">
                      Share your quantity, fabric preferences, and timeline.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
                  <div className="w-12 h-12 bg-white text-black border-2 border-black rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-sm group-hover:bg-black group-hover:text-white transition-all duration-300">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-lg group-hover:text-black transition-colors">Get a Custom Quote</h4>
                    <p className="text-gray-500 text-sm mt-1">
                      We'll provide a detailed breakdown within 24 hours.
                    </p>
                  </div>
                </div>
              </div> */}

              {/* Career Card */}
              <div className="mt-12 group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center shadow-md">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 leading-tight">Career Opportunities</h4>
                      <p className="text-xs text-gray-500">Join our mission-driven team</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl p-3 shadow-inner">
                    <span className="font-medium text-gray-600 text-sm truncate mr-4">
                      Join Our Team
                    </span>
                    <a
                      href="https://forms.gle/tn4cZparWucmgd9d8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-black text-white hover:bg-gray-800 text-xs font-bold py-2 px-4 rounded-lg transition-all duration-300 active:scale-95 no-underline"
                    >
                      Apply Now
                    </a>
                  </div>
                  <p className="text-xs text-gray-400 mt-3 text-center">
                    Fill out the form to apply
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-7/12 mt-8 lg:mt-0">
            <RevealOnScroll delay={200}>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                {submitted ? (
                  <div className="h-[600px] flex flex-col items-center justify-center text-center animate-fade-in">
                    <div className="w-24 h-24 relative mb-8">
                      <svg className="w-full h-full text-green-500" viewBox="0 0 52 52">
                        <circle className="opacity-20" cx="26" cy="26" r="25" fill="none" stroke="currentColor" strokeWidth="4" />
                        <path className="animate-checkmark" fill="none" stroke="currentColor" strokeWidth="4" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 font-display">Request Received!</h3>
                    <p className="text-gray-600 text-lg max-w-sm mb-8">
                      We'll be in touch regarding your uniform requirements shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg active:scale-95 text-sm font-medium"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="col-span-1">
                        <label htmlFor="name" className={labelClasses}>Full Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          className={inputClasses("name")}
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="col-span-1">
                        <label htmlFor="company" className={labelClasses}>Company Name</label>
                        <input
                          type="text"
                          name="company"
                          required
                          onFocus={() => setFocusedField("company")}
                          onBlur={() => setFocusedField(null)}
                          className={inputClasses("company")}
                          placeholder="Acme Corp"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="col-span-1">
                        <label htmlFor="email" className={labelClasses}>Work Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          className={inputClasses("email")}
                          placeholder="jane@company.com"
                        />
                      </div>
                      <div className="col-span-1">
                        <label htmlFor="mobile" className={labelClasses}>Mobile Number</label>
                        <input
                          type="tel"
                          name="mobile"
                          required
                          onFocus={() => setFocusedField("mobile")}
                          onBlur={() => setFocusedField(null)}
                          className={inputClasses("mobile")}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className={labelClasses}>Enquiry Details</label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses("message")}
                        placeholder="Please describe your requirements (Quantity, Fabric type, Timeline)..."
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="group w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-900 transition-all duration-300 hover:shadow-xl active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
                      >
                        {loading ? "Sending..." : "Submit Enquiry"}
                        {!loading && (
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        )}
                      </button>
                      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                        <AlertCircle className="w-3 h-3" />
                        <span>Your data is securely processed and never shared.</span>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
