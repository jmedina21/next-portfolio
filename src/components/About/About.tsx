'use client'
import {useRef, useState } from "react";

export function About() {

    const [isExpanded, setIsExpanded] = useState(false);
    

    return (
        <section className="p-4 md:p-8 flex justify-center items-center text-white font-inter m-auto">
            <article className="font-inter text-sm md:text-base w-full pl-4 md:pl-6 border-l border-[#585858] border-dashed">
                <h2 className="text-[#B7B7B7] mb-4">About</h2>
                <p className="mb-4">I&apos;m Pablo Medina, a Software Engineer based in New York. I graduated as a Doctor in 2020 and worked on the Covid-19 frontlines during 2020-2021.</p>
                <p className="mb-4">After that experience, I took on an old passion of mine: Computer Programs. I started learning on my own and had the opportunity to work
                    {!isExpanded ? (
                        <>
                            {"  "}
                            <button 
                                onClick={() => setIsExpanded(true)}
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
                        <p className="mb-4">After relocating from Botswana, where I was working as a doctor, I decided to fully transition from my role as an MD to a full-stack developer here in New York.</p>
                        <p className="mb-4">I graduated from BrainStation&apos;s bootcamp which gave me an updated view on best practices in the industry. During this last year, I&apos;ve built and deployed projects into the world, like Foogle, a search engine for second-hand markets.</p>
                        <p className="mb-0">I am a passionate gamer and a cinephile; I enjoy building computers from scratch and tinkering with different software. I love building good products that help improve the lives of people all over the world.</p>
                    </>
                )}
            </article>
        </section>
    )
}


