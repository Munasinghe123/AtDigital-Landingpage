
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Footer() {
    return (
        <footer className="bg-[#4F46E5] text-white  w-full">
            <div className="mx-auto  px-7 lg:px-20 py-10">

                <div className="grid  gap-10 md:grid-cols-3 items-start">

                    <div className="flex flex-col items-start gap-4">
                        <Link to="/">
                            <img src={Logo} alt="at digital" className="h-10 w-auto mt-1" />
                        </Link>

                        <p className="mt-3 text-sm text-white max-w-sm">
                            Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
                        </p>
                    </div>


                    <div className="items-start lg:justify-self-end">
                        <h4 className="text-white font-semibold">Our Technologies</h4>
                        <ul className="mt-3 space-y-2 text-sm text-white">
                            <li>ReactJS</li>
                            <li>Gatsby</li>
                            <li>NextJS</li>
                            <li>NodeJS</li>
                        </ul>
                    </div>


                    <div className="items-start lg:justify-self-end">
                        <h4 className="text-white font-semibold">Our Services</h4>
                        <ul className="mt-3 space-y-2 text-sm text-white">
                            <li><Link className="hover:underline" to="/services/social">Social Media Marketing</Link></li>
                            <li><Link className="hover:underline" to="/services/web-mobile">Web &amp; Mobile App <br /> Development</Link></li>
                            <li><Link className="hover:underline" to="/services/data-analytics">Data &amp; Analytics</Link></li>
                        </ul>
                    </div>
                </div>


                <div className="flex justify-center">
                    <hr className="mb-2 mt-10 border-[#FFFFFF] border-t-1 lg:w-1/2 w-full" />
                </div>



                <div className="flex items-center justify-center gap-3 flex-row md:justify-center text-xs">
                    <Link to="/privacy" className="hover:underline">
                        Privacy Policy
                    </Link>
                    <span className="inline text-white/60">|</span>
                    <Link to="/terms" className="hover:underline">
                        Terms &amp; Conditions
                    </Link>
                </div>
            </div>
        </footer >
    );
}
