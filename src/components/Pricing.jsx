import React from 'react';

export default function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1180px] mx-auto text-center">
        <h2 className="text-[50px] font-bold text-stone-900 mb-6">Choose Plan That's Right For You</h2>
        <p className="text-neutral-400 text-lg font-bold mb-8">
          Choose plan that works best for you, feel free to contact us
        </p>

        <div className="w-[340px] h-[70px] mx-auto bg-white rounded-[10px] shadow mb-16 flex items-center justify-between p-2">
          <span className="text-stone-900 text-lg font-medium px-8">Bill Monthly</span>
          <button className="bg-emerald-400 text-white px-8 py-3 rounded-[10px] text-lg font-medium">
            Bill Yearly
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-[20px] shadow p-10">
            <h3 className="text-3xl font-semibold text-stone-900 mb-4">Free</h3>
            <p className="text-neutral-400 text-lg mb-8">Have a go and test your superpowers</p>
            <div className="flex items-baseline justify-center mb-8">
              <span className="text-neutral-400 text-lg">$</span>
              <span className="text-[50px] font-semibold text-stone-900 ml-2">0</span>
            </div>
            {/* Add features list */}
          </div>

          {/* Pro Plan */}
          <div className="bg-emerald-400 rounded-[20px] p-10 transform scale-105">
            <h3 className="text-3xl font-semibold text-white mb-4">Pro</h3>
            <p className="text-white text-lg mb-8">Experiment the power of infinite possibilities</p>
            <div className="flex items-baseline justify-center mb-8">
              <span className="text-white text-lg">$</span>
              <span className="text-[50px] font-semibold text-white ml-2">8</span>
            </div>
            {/* Add features list */}
          </div>

          {/* Business Plan */}
          <div className="bg-white rounded-[20px] shadow p-10">
            <h3 className="text-3xl font-semibold text-stone-900 mb-4">Business</h3>
            <p className="text-neutral-400 text-lg mb-8">Unveil new superpowers and join the Design League</p>
            <div className="flex items-baseline justify-center mb-8">
              <span className="text-neutral-400 text-lg">$</span>
              <span className="text-[50px] font-semibold text-stone-900 ml-2">16</span>
            </div>
            {/* Add features list */}
          </div>
        </div>
      </div>
    </section>
  );
}