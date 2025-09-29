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

        <section ref={sectionRef} className="relative overflow-hidden">

            <div
                ref={bgRef}
                className="w-full h-[50vh] md:h-[60vh] lg:h-[90vh] bg-cover bg-[center_20%] will-change-transform"
                style={{ backgroundImage: `url(${hero})` }}
            />
            <div className="relative lg:absolute lg:inset-0 z-10">
                <div className="flex items-start lg:items-center justify-start h-full lg:px-20 lg:pt-72">
                    <div className="bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] p-4 md:p-6 w-full lg:max-w-2xl shadow-2xl ">
                        <h1 className="text-white font-bold mb-6">
                          
                            <span className="block sm:hidden text-4xl">
                                We Crush Your <br/> Competitors, <br/> Goals, And Sales <br/> Records - Without <br/> The B.S.
                            </span>

                            <span className="hidden md:block lg:hidden text-5xl">
                                We Crush Your 
                                Competitors,  <br /> Goals, And 
                                Sales Records -  <br /> Without  The B.S. 
                            </span>
                        
                        <span className="hidden lg:block text-5xl">
                                We Crush Your <br />
                                Competitors, Goals, And <br />
                                Sales Records - Without <br />
                                The B.S.
                            </span>
                        </h1>
                        <button className="bg-[#F28D35] hover:bg-orange-500 uppercase cursor-pointer text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300">
                            Get Free Consultation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
