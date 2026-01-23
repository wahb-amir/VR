'use client'
import React, { useState } from 'react';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '600'] });
const inter = Inter({ subsets: ['latin'] });

const NeuroContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'VR Development',
    details: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <section className={`min-h-screen bg-transparent text-white flex items-center justify-center overflow-hidden relative z-10 ${inter.className}`} id='contact'>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between relative z-10 w-full max-w-7xl">
        
        <div className={`hidden lg:block text-[12rem] leading-none text-white italic tracking-tighter ${playfair.className}`}>
          Let's
        </div>

      
        <div className="w-full max-w-xl mx-4">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden group transition-all duration-500 hover:border-white/20 hover:shadow-purple-900/20">
          
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 pointer-events-none" />

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-400 p-[2px]">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-xs font-bold">
                  NVR
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-sm">We are NeuroVR</p>
                <p className="text-white font-medium">Ready to build the future?</p>
              </div>
            </div>

            {!isSent ? (
              <form onSubmit={handleSubmit} className="space-y-6 text-xl md:text-2xl leading-relaxed text-gray-300">
                <p>
                  Hi there! My name is 
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="your name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="mx-2 bg-transparent border-b-2 border-gray-600 focus:border-purple-400 outline-none text-white placeholder-gray-600 w-40 transition-colors"
                  />
                  .
                </p>

                <p>
                  I'm looking for help with 
                  <select 
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="mx-2 bg-transparent border-b-2 border-gray-600 focus:border-purple-400 outline-none text-purple-300 font-medium cursor-pointer transition-colors appearance-none"
                  >
                    <option className="bg-neutral-900 text-gray-300" value="VR Software">VR Software</option>
                    <option className="bg-neutral-900 text-gray-300" value="AR Integration">AR Integration</option>
                    <option className="bg-neutral-900 text-gray-300" value="3D Modeling">3D Modeling</option>
                    <option className="bg-neutral-900 text-gray-300" value="Consulting">Consulting</option>
                  </select>
                  .
                </p>

                <p>
                  You can reach me at 
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="your@email.com" 
                    value={formData.email}
                    onChange={handleChange}
                    className="mx-2 bg-transparent border-b-2 border-gray-600 focus:border-purple-400 outline-none text-white placeholder-gray-600 w-full sm:w-64 transition-colors"
                  />
                  to discuss details.
                </p>

                <div className="pt-6">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="group relative w-full py-4 bg-white text-black font-semibold rounded-xl overflow-hidden transition-all hover:scale-[1.02]"
                  >
                    <span className={`absolute inset-0 w-full h-full bg-gradient-to-r from-purple-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? 'Sending...' : 'Send Message'}     
                    </span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4"> 
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                <p className="text-gray-400">Thanks, {formData.name}. We'll be in touch shortly.</p>
                <button 
                  onClick={() => setIsSent(false)} 
                  className="mt-6 text-sm text-purple-400 hover:text-purple-300 underline"
                >
                  Send another?
                </button>
              </div>
            )}
          </div>
        </div>

        <div className={`hidden lg:block text-[12rem] leading-none text-white italic tracking-tighter ${playfair.className}`}>
          Talk
        </div>

        <div className={`lg:hidden absolute top-10 left-0 w-full text-center text-6xl text-white/10 font-bold -z-10 ${playfair.className}`}>
          Let's Talk
        </div>

      </div>
    </section>
  );
};

export default NeuroContact;