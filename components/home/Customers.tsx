"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Customers() {
  // Placeholder for customer logos - in a real app, these would be actual image files
  const customers = [
    { name: "Customer 1", logo: "logo (1)" },
    { name: "Customer 2", logo: "logo (2)" },
    { name: "Customer 3", logo: "logo (3)" },
    { name: "Customer 4", logo: "logo (4)" },
    { name: "Customer 5", logo: "logo (5)" },
    { name: "Customer 6", logo: "logo (6)" },
    { name: "Customer 7", logo: "logo (7)" },
    { name: "Customer 8", logo: "logo (8)" },
    { name: "Customer 9", logo: "logo (9)" },
    { name: "Customer 10", logo: "logo (10)" },
    { name: "Customer 11", logo: "logo (11)" },
    { name: "Customer 12", logo: "logo (12)" },
    { name: "Customer 13", logo: "logo (13)" },
  ];

  return (
    <section id="customers" className="bg-[#E8F4F8] py-16 md:py-24 relative z-50">
      <div className="px-4 flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-black text-center mb-12" dir="rtl">
          مشتریان ما
        </h2>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {customers.map((customer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.1,
              }}
              className="bg-white/20 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center h-32"
            >
              
                <Image src={`/home/logos/${customer.logo}.png`} width={60} height={60} alt="image" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

