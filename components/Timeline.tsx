import React from "react";
import { motion } from "framer-motion";
import { TIMELINE_DATA } from "../constants";
import { Calendar } from "lucide-react";

export const Timeline: React.FC = () => {
  return (
    <section id="story" className="py-24 px-4 md:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-romantic font-bold text-pink-600 mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-pink-200 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full bg-pink-100 -translate-x-1/2"></div>

          <div className="flex flex-col gap-20">
            {TIMELINE_DATA.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-pink-400 rounded-full shadow-lg z-10 border-2 border-white"></div>

                {/* Card */}
                <div className="w-full md:w-[45%] bg-white rounded-3xl overflow-hidden shadow-xl border border-pink-50 hover:shadow-2xl transition-shadow group">
             <div className="relative w-full aspect-[4/3] overflow-hidden bg-pink-50 flex items-center justify-center">
             <img
              src={event.image}
              alt={event.title}
              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                 />
              </div>


                  <div className="p-8">
                    <div className="flex items-center gap-2 text-pink-400 mb-2 font-bold text-sm">
                      <Calendar size={16} />
                      <span>{event.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
