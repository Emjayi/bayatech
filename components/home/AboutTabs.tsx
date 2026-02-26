"use client";

import { useState } from "react";
import FadeInUp from "./FadeInUp";

const tabs = [
  
  { id: "ماموریت", title: "ماموریت", content: (
    <div id="third-section" className=" mx-auto px-8 pt-4 mt-5 pb-6 text-white flex flex-col gap-4 bg-orange-400 rounded-2xl text-right">
                <h2 className="w-32 -mt-10 font-bold text-orange-400 h-12 flex bg-white rounded-md shadow-md justify-center items-center text-center">ماموریت:</h2>
                <p>ما نیاز را درک میکنیم، با طراحی به آن جان میبخشیم، با کیفیت میسازیم و با ظرافت نصب میکنیم تا هر آسانسور، بازتابی از اصالت انتخاب مشتری باشد</p>
            </div>
  ) },
  { id: "ارزش ها", title: "ارزش ها", content: (
   <div id="fourth-section" className=" mx-auto px-8 pt-4 mt-5 pb-6 flex text-white flex-col gap-4 bg-orange-400 rounded-2xl text-right">
                <h2 className="w-32 -mt-10 font-bold text-orange-400 h-12 flex bg-white rounded-md shadow-md justify-center items-center text-center">ارزش ها:</h2>
                <p>آسانسور را به تن ساختمان شما طراحی میکنیم؛ دقیق، خاص و هماهنگ با روح فضا (طراحی اختصاصی)
با هم پیش میرویم و باور داریم، کیفیت واقعی از همدلی و همفکری زاده میشود (کار تیمی) هر روز می‌آموزیم 
و رشد می‌کنیم، چون بهتر شدن بخشی از ماهیت ماست ش(رشد مستمر)
می‌سازیم با احترام، چرا که هر انتخاب مشتری، مسئولیتی است که با افتخار به دوش می‌کشیم (احترام به مشتری)</p>
            </div>
  ) },
  { id: "چشم انداز", title: "چشم انداز", content: (
    <div id="fifth-section" className=" mx-auto px-8 pt-4 mt-5 pb-6 flex text-white flex-col gap-4 bg-orange-400 rounded-2xl text-right">
                <h2 className="w-32 -mt-10 font-bold text-orange-400 h-12 flex bg-white rounded-md shadow-md justify-center items-center text-center">چشم انداز:</h2>
                <p>در دل کارخانه‌ بایاتک، آسانسورهایی را می‌سازیم که هر یک بازتابی از آینده صنعت ایران در نوآوری و کیفیت‌اند. در تلاشیم آوازه پکیج‌های کامل ما، فراتر از مرزها شنیده شود تا نام ایران را در بازارهای جهانی طنین‌انداز کنیم.  </p>
            </div>
  ) },
  { id: "مجوزها", title: "مجوزها", content: (
    <div id="second-section" className=" mx-auto h-20 px-8 pt-4 pb-32 flex flex-col gap-4 bg-white rounded-2xl text-center">
                <h1 className="text-xl font-bold text-orange-400">
                    مجوزهای بایاتک
                </h1>
                <div className="flex justify-between gap-4 ">
                    <div className="w-48 h-32 bg-[#E68626] rounded-3xl">

                    </div>
                    <div className="w-48 h-32 bg-[#E68626] rounded-3xl">

                    </div>
                    <div className="w-48 h-32 bg-[#E68626] rounded-3xl">

                    </div>
                    <div className="w-48 h-32 bg-[#E68626] rounded-3xl">

                    </div>
                </div>
            </div>
  ) },
];

export default function AboutTabs() {
  const [active, setActive] = useState(0);

  return (
    <section aria-labelledby="about-tabs" className="mb-8" >
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="about-tabs" className="sr-only">About tabs</h2>

        <div className="flex flex-col gap-6">
          <div className="md:w-full">
            <nav className="flex w-full justify-center gap-2" role="tablist" aria-orientation="vertical">
              {tabs.map((t, i) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={active === i}
                  aria-controls={`panel-${t.id}`}
                  id={`tab-${t.id}`}
                  onClick={() => setActive(i)}
                  className={`text-left cursor-pointer px-4 py-3 w-full flex justify-center rounded-md border transition-colors duration-150 ${active === i ? 'bg-[#E68626] text-white border-[#E68626]' : 'bg-white text-gray-800 border-gray-200'}`}>
                  {t.title}
                </button>
              ))}
            </nav>
          </div>

          <div className="w-full">
            {tabs.map((t, i) => (
              <div
                key={t.id}
                role="tabpanel"
                id={`panel-${t.id}`}
                aria-labelledby={`tab-${t.id}`}
                hidden={active !== i}
              >
                {active === i && (
                  <FadeInUp>
                    {t.content}
                  </FadeInUp>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
