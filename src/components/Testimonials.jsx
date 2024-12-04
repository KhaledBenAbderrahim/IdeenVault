import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-[1180px] mx-auto grid grid-cols-2 gap-16">
        <div>
          <h2 className="text-[50px] font-semibold mb-8">
            People are Saying About DoWhith
          </h2>
          <p className="text-neutral-400 text-lg font-medium leading-[30px] mb-16">
            Everything you need to accept payment and grow your money of manage anywhere on planet
          </p>
          <div className="mb-16">
            <p className="text-neutral-400 text-lg font-medium leading-[30px] mb-4">
              I am very helped by this E-wallet application, my days are very easy to use this application and its very helpful in my life, even I can pay a short time 😍
            </p>
            <p className="text-neutral-400 text-lg font-medium">_ Aria Zinanrio</p>
          </div>
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-[66px] h-[66px] rounded-full bg-gray-400" />
            ))}
            <div className="w-[66px] h-[66px] rounded-full border-2 border-white flex items-center justify-center">
              <span>+</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-[20px] p-12">
          <h3 className="text-3xl font-medium text-center mb-16">Get Started</h3>
          <form className="space-y-8">
            <div>
              <label className="block text-lg font-medium mb-3">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-[50px] bg-white rounded-[10px] px-5 text-gray-900"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-3">Message</label>
              <textarea
                placeholder="What are you say?"
                className="w-full h-20 bg-white rounded-[10px] px-5 py-3 text-gray-900"
              />
            </div>
            <button className="w-full bg-emerald-400 text-white py-4 rounded-[10px] font-semibold">
              Request Demo
            </button>
            <p className="text-center">
              <span className="text-neutral-400">or</span>{" "}
              <span className="text-white">Start Free Trial</span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}