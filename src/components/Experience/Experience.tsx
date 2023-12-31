export function Experience(){
    return(
        <section className="p-4 md:p-8 flex justify-center items-center text-white font-inter m-auto" >
            <svg width="2" height="160" viewBox="0 0 2 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.3" d="M1 0V160" stroke="white" strokeDasharray="3 3"/>
            </svg>
            <article className="font-inter text-sm md:text-base w-full ml-4 md:ml-6">
                <h2 className="text-[#B7B7B7] mb-4 md:text-lg">Experience</h2>
                <div className="flex justify-between items-center">
                    <h2 className="md:text-lg">Full Stack Developer</h2>
                    <p className="text-xs md:text-base text-[#B7B7B7]">Jul 2023 → Present</p>
                </div>
                <a href="https://gammma.io" target="_blank">
                    <p className="text-xs md:text-base mb-5">Gammma ↗</p>
                </a>
                <div className="flex justify-between items-center">
                    <h2 className="md:text-lg">Coding Instructor</h2>
                    <p className="text-xs md:text-base text-[#B7B7B7]">Dec 2023 → Present</p>
                </div>
                <a href="https://www.thefuturesphere.com/" target="_blank">
                    <p className="text-xs md:text-base mb-5">FutureSphere ↗</p>
                </a>
                <div className="flex justify-between items-center">
                    <h2 className="md:text-lg">Software Engineer</h2>
                    <p className="text-xs md:text-base text-[#B7B7B7]">Jan 2022 → Jun 2023</p>
                </div>
                <a href="https://masterbrews.com/" target="_blank">
                    <p className="text-xs md:text-base">MasterBrews ↗</p>
                </a>

            </article>

        </section>
    )
}