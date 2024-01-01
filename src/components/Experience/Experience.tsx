export function Experience(){
    return(
        <section className="p-4 md:p-8 flex justify-center items-center text-white font-inter m-auto" >
            <article className="font-inter text-sm md:text-base w-full pl-4 md:pl-6 border-l border-[#585858] border-dashed">
                <h2 className="text-[#B7B7B7] mb-4">Experience</h2>
                <div className="flex justify-between items-center">
                    <h3>Full Stack Developer</h3>
                    <p className="text-xs md:text-sm text-[#B7B7B7]">Jul 2023 → Present</p>
                </div>
                <a href="https://gammma.io" target="_blank">
                    <p className="text-xs md:text-sm mb-5">Gammma ↗</p>
                </a>
                <div className="flex justify-between items-center">
                    <h3>Coding Instructor</h3>
                    <p className="text-xs md:text-sm text-[#B7B7B7]">Dec 2023 → Present</p>
                </div>
                <a href="https://www.thefuturesphere.com/" target="_blank">
                    <p className="text-xs md:text-sm mb-5">FutureSphere ↗</p>
                </a>
                <div className="flex justify-between items-center">
                    <h3>Software Engineer</h3>
                    <p className="text-xs md:text-sm text-[#B7B7B7]">Jan 2022 → Jun 2023</p>
                </div>
                <a href="https://masterbrews.com/" target="_blank">
                    <p className="text-xs md:text-sm">MasterBrews ↗</p>
                </a>

            </article>

        </section>
    )
}