import { div } from "framer-motion/client";
import Image from "next/image";

export default function ElevatorButton() {
  const myStyle = {
    backgroundImage: `url(/home/elevatorButton/back.png)`, // Use template literal for imported variable
    height: '60vh',
    backgroundSize: 'cover', // Other CSS properties use camelCase
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div id="elevator-button-section" className="relative z-50 flex justify-center items-start py-10" style={myStyle}>
      <Image className="" src="/home/elevatorButton/Key.png" width={200} height={200} alt="elevator" />
    </div>
  );
}

