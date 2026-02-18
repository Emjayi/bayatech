import { div } from "framer-motion/client";
import Image from "next/image";

export default function ElevatorButton() {
  return (
    <div id="elevator-button-section" className="h-[50vh] relative z-50">
      <Image className="w-full h-full" src="/home/footer-el-button.png" width={1600} height={2400} alt="elevator" />
    </div>
  );
}

