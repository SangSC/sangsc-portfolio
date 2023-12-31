// contact/page.jsx

"use client";

import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import { HydrationProvider, useHydrated } from "react-hydration-provider";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// components
import ContactForm from "@/components/ContactForm";

function MyComponent() {
  const hydrated = useHydrated();
  return hydrated ? <p>Client render</p> : <p>Server render</p>;
}

const Contact = () => {
  return (
    <HydrationProvider>
      <section>
        <motion.div
          className="flex flex-col h-[75vh] lg:flex-row lg:items-center mt-12 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* left: comment */}
          <div className="w-[30%] min-w-[350px] w-max-[400px] flex flex-col mx-auto justify-center xl:ml-40 2xl:ml-60 3xl:ml-80">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Please feel free to contact me 😆
            </div>

            <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
              {/* mail */}
              <div className="flex items-center gap-x-8">
                <MailIcon size={18} className="text-primary" />
                <div>r.sang.chao@gmail.com</div>
              </div>
            </div>
          </div>
          {/* right: contact form */}
          <div className="w-[40%] min-w-[350px] max-w-[550px] max-h-[700px] mx-auto xl:mr-40 2xl:mr-80">
            <ContactForm />
          </div>
        </motion.div>
        {/* </div> */}
      </section>
    </HydrationProvider>
  );
};

export default dynamic(() => Promise.resolve(Contact), { ssr: false });
