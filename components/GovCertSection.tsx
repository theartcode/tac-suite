"use client";

import { motion } from "framer-motion";

const certs = [
  
  { src: "/dpiit.png", label: "MSME Registered", sub: "Ministry of MSME, Govt. of India" },
  { src: "/001.png", label: "TAC Certified", sub: "Job & Freelance Ready" },
  { src: "/msme.png", label: "DPIIT Recognised", sub: "Startup India, Govt. of India" },
];

export function GovCertSection() {
  return (
    <section className="bg-[#F7F4E8] py-16 px-[6%]">
      <div className=" text-center">
        <p className="text-[#C9A227] text-[11px] tracking-[4px] uppercase mb-2">
          Officially Recognised
        </p>
        <h2 className="text-[#111] text-2xl font-bold mb-10">
          Government Certified Institution
        </h2>

        <div className="grid grid-cols-3 gap-0">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center"
            >
              <img
                src={cert.src}
                alt={cert.label}
                className="h-20 w-auto max-w-40 object-contain mx-auto"
              />
            
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
