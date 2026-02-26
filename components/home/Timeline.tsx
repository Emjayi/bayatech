"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Timeline() {
  const milestones = [
      {
          year: "۱۴۰۲",
          img:"/home/icons/Factory.png",
          title: "راه‌اندازی کارخانه تولید کابین آسانسور",
        },
      {
          year: "۱۴۰۲",
          img:"/home/icons/KONE.png",
          title: "ارائه خدمات سرویس و نگهداری برند انحصاری kone",
        },
      {
          year: "۱۴۰۲",
          img:"/home/icons/License.png",
          title: "اخذ پروانه طراحی و مونتاژ آسانسور",
        },
        {
            year: "۱۴۰۱",
            img:"/home/icons/Membership.png",
            title: "عضویت در سندیکای آسانسور و پله برقی ایران",
          },
        {
            year: "۱۴۰۰",
            img:"/home/icons/Pickaxe.png",
            title:"همکاری با سازندگان دزفول، چابهار و تهران"
        },
        {
            year: "۱۳۹۹",
            img:"/home/icons/design.png",
            title: "تشکیل واحد طراحی تخصصی",
        },
        {
            year: "۱۳۹۹",
            img:"/home/icons/11.png",
            title: "آغاز همکاری با بیمارستانها و مراکز درمانی",
        },
    {
        year: "۱۳۹۸",
        img:"/home/icons/Registration copy.png",
    title: " همکاری با سازندگان مناطق1،9،11 مشهد",
  },
    {
        year: "۱۳۹۸",
    img:"/home/icons/start2.png",
    title: "شروع فعالیت رسمی شرکت",
  },
    {
      year: "۱۳۹۷",
      img:"/home/icons/Registration.png",
      title: "ثبت شرکت",
    },
];

return (
    <section id="about" className="bg-[#EFFAFE] py-16 md:py-24">
      <div className=" px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-700 text-center mb-12">
      تاریخچه بایاتک
        </h2>
        <div className="">

          {/* Timeline Items */}
          <div className="grid grid-cols-5 md:grid-cols-10 gap-4 md:gap-0">
            {milestones.map((milestone, index) => (
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
                className="flex flex-col items-center "
              >
                {/* Icon Circle */}
                <div className="w-24 h-24 flex items-center justify-center mb-4">
                  <Image src={milestone.img} alt={milestone.title} width={60} height={60} />
                </div>

                {/* Year */}
                <div className="text-xl font-bold text-[#1E3A5F] mb-2" dir="rtl">
                  {milestone.year}
                </div>

                {/* Title */}
                <div
                  className="text-sm text-gray-700 text-center px-2" dir="rtl"
                >
                  {milestone.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

