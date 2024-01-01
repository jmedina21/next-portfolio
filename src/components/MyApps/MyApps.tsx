import Image from "next/image"
import foogle from '../../assets/logos/Foogle logo.svg'
import tab2mark from '../../assets/logos/Tab2Mark logo.svg'
import mb from '../../assets/logos/mb-logo.webp'

export function MyApps(){
    return(
        <section className="p-4 md:p-8 flex justify-center items-center text-white font-inter m-auto" >
            <article className="flex flex-col gap-4 font-inter text-sm md:text-base w-full pl-4 md:pl-6 border-l border-[#585858] border-dashed">
                <h2 className="text-[#B7B7B7] md:text-lg">Apps</h2>
                <div className="flex items-center">
                    <div className="flex gap-2 items-center justify-between">
                        <Image
                            className="w-6"
                            src={foogle}
                            alt='Foogle logo'/>
                        <a href="https://foogle.foo/" target="_blank">
                            <h2>Foogle ↗</h2>
                        </a>
                    </div>
                    <p className="text-xs md:text-base text-[#b7b7b7] w-7/12 ml-auto text-right">&quot;Centralized secondary marketplace solution&quot;</p>
                </div>
                <div className="flex items-center">
                    <div className="flex gap-2 items-center justify-between">
                        <Image
                            className="w-6"
                            src={tab2mark}
                            alt='Tab2Mark logo'/>
                        <a href="https://chromewebstore.google.com/detail/tab2mark/iieofemdmlppbhikdeknlbjkichfmnmo" target="_blank">
                            <h2>Tab2Mark ↗</h2>
                        </a>
                    </div>
                    <p className="text-xs md:text-base text-[#b7b7b7] w-7/12 ml-auto text-right">&quot;Chromium extension to manage saved links with markdown integration&quot;</p>
                </div>
                <div className="flex items-center">
                    <div className="flex gap-2 items-center justify-between">
                        <Image
                            className="w-6 rounded-md"
                            src={mb}
                            alt='MasterBews logo'/>
                        <a href="https://masterbrews.com/" target="_blank">
                            <h2>MasterBrews ↗</h2>
                        </a>
                    </div>
                    <p className="text-xs md:text-base text-[#b7b7b7] w-7/12 ml-auto text-right">&quot;MasterBews tech services website&quot;</p>
                </div>
            </article>
        </section>
    )
}