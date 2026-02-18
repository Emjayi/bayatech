"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      img:"/home/exp (4).png",
      title: "پیگیری خرید",
      width: 200,
      height: 200,
    },
    {
        img:"/home/exp (3).png",
      title: "سرویس و نگهداری",
      width: 200,
      height: 200,
    },
    {
        img:"/home/exp (2).png",
      title: "اندازه گیری و نصب",
      width: 270,
      height: 270,
    },
    {
        img:"/home/exp (1).png",
      title: "مشارکت در پروژه",
      width: 220,
      height: 220,
    },
  ];

  return (
    <section className="bg-[#EDFBFD] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A5F] text-center mb-12">
          چطور میتونیم کمکت کنیم؟
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
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
              className="flex flex-col items-center text-center space-y-4"
            >
              <Image width={service.width} height={service.height} src={service.img} alt={service.title}/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

