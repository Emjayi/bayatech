"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Expertise() {
  return (
    <div>
      <div className="bg-[#EFFAFE]  pr-20">
        <div className="flex gap-8 items-center justify-between">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <Image alt="expertise" src="/home/expertise.png" width={480} height={480} />
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.2,
            }}
            className="space-y-6"
          >
            {/* English Text */}
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold">With expertise in elevator design and installation,</span> <br/>we deliver
              safe, modern solutions based on the latest standards. <br/>From
              engineering design to precise execution and final installation, <br/>we
              ensure a smooth, reliable elevator tailored to your building.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="bg-[#EFFAFE]">
      <div className="bg-[#E68626] rounded-bl-[150px] pl-20">
        <div className="flex gap-8 items-center justify-between">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="space-y-6"
          >
            {/* English Text */}
            <p className="text-white leading-relaxed text-right">
            ،شرکت بایاتک با  استفاده از قطعات درجه یک و برندهای معتبر در آسانسور
<br/>.ایمنی، دوام و عملکردی بی‌نقص را برای پروژه‌های خود تضمین می‌کند
<br/>.کیفیت بالا، انتخاب آگاهانه قطعات و تعهد به رضایت مشتری، اساس کار بایاتک است
            </p>
          </motion.div>
          {/* Right Side - Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.2,
            }}
            >
            <Image alt="expertise" src="/home/el-button.png" width={480} height={480} />
          </motion.div>
        </div>
            </div>
      </div>
    </div>
  );
}

