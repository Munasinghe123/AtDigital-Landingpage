import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hero from "../../assets/heroImage1.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const sectionRef = useRef(null);
    const bgRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(bgRef.current, {
                scale: 2,
                ease: "none",
                transformOrigin: "center 40%",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-[70vh] md:h-[90vh] overflow-hidden">
            <div
                ref={bgRef}
                className="absolute inset-0 bg-cover bg-[center_60%] md:bg-[center_20%] will-change-transform"
                style={{ backgroundImage: `url(${hero})` }}
            />

            <div className="relative z-10 flex items-center justify-start h-full lg:pl-40  lg:pt-72">
                <div className="bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] p-8 md:p-10 max-w-md md:max-w-xl  shadow-2xl">
                    <h1 className="text-white text-3xl md:text-4xl  font-bold mb-6">
                        We Crush Your <br /> Competitors, Goals, And Sales Records - Without <br /> The B.S.
                    </h1>
                    <button className="bg-[#F28D35] hover:bg-orange-500 uppercase cursor-pointer text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300">
                        Get Free Consultation
                    </button>
                </div>
            </div>
        </section>
    );
}
