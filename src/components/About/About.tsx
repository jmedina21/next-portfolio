'use client'
import {useRef, useState } from "react";

export function About() {

    const [isExpanded, setIsExpanded] = useState(false);
    const [svgHeight, setSvgHeight] = useState(116);
    const contentRef = useRef<HTMLElement | null>(null);

    function expand(){
        setIsExpanded(true);
        setTimeout(() => {
            if (contentRef.current) {
                setSvgHeight(contentRef.current.offsetHeight - 40);
            }
        }, 0);
    }

    const svgPath = `M1 0V${svgHeight}`;

    return (
        <section className="p-4 md:p-8 flex justify-center items-center text-white font-inter m-auto">
            <svg width="2" height={svgHeight} viewBox={`0 0 2 ${svgHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.3" d={svgPath} stroke="white" strokeDasharray="3 3"/>
            </svg>
            <article ref={contentRef} className="font-inter text-sm md:text-base w-full ml-4 md:ml-6">
                <h2 className="text-[#B7B7B7] mb-4 md:text-lg">About</h2>
                <p className="mb-4">I&apos;m Pablo Medina, a Software Engineer based in New York. I graduated as a Doctor in 2020 and worked right in the Covid-19 frontlines during 2020-2021.</p>
                <p className="mb-4"> After that experience I took on an old passion of mine: Computer Programs. I started learing on my own and had the opportunity to work
                    {!isExpanded ? (
                        <>
                            {"  "}
                            <button 
                                onClick={expand}
                                className="text-blue-500 hover:text-blue-400 inline">
                                Read more...
                            </button>
                        </>
                    ):
                <span className="mb-4"> remotely as a developer for the Canadian studio MasterBrews. I was hooked.</span>
                    }
                </p>
                {isExpanded && (
                    <>
                        <p className="mb-4">After relocating myself from Botswana, where I was working as a doctor, I decided to fully transition from role as an MD to a full-stack developer here in New York.</p>
                        <p className="mb-0">I graduated from BrainStation bootcamp what gave me an updated view on best practices in the industry. During this last year, I&apos;ve built and deployed projects into the world, like Foogle, a search engine for second-hand markets. I&apos;d love to be part of a team, building good products that help improve the life of people all over the world.</p>
                    </>
                )}
            </article>
        </section>
    )
}


