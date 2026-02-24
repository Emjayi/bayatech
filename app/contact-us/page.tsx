import Contact from "@/components/home/Contact";
import ContactForm from "@/components/home/ContactForm";

export default function Page() {
    return (
        <div className="w-full h-screen bg-[#1E3A5F]" dir="ltr">
            <div className="flex gap-10 w-[70%] mx-auto">
                <div className="w-1/2">
                <ContactForm />
                </div>
                <div className="text-white mt-8 text-left">
                    <h1 className="text-6xl font-bold">Get In Touch</h1>
                    <p className="text-sm max-w-md">
                    We can ensure reliability, low cost fares and most important, with safety and comfort in mind.
                    Etiam sit amet convallis erat – class aptent taciti sociosqu ad litora torquent per conubia! Maecenas gravida lacus. Lorem etiam sit amet convallis erat.
                    </p>
                </div>
            </div>
            <div>
            <Contact />
            </div>
        </div>
    );
}