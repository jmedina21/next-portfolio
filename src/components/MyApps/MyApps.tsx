import Image from "next/image"
import foogle from '../../assets/logos/Foogle logo.svg'
import tab2mark from '../../assets/logos/Tab2Mark logo.svg'
import mb from '../../assets/logos/mb logo.svg'

export function MyApps(){
    return(
        <section className="p-4 md:p-8 flex justify-center items-center text-white font-inter m-auto" >
            <svg width="2" height="130" viewBox="0 0 2 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.3" d="M1 0V130" stroke="white" strokeDasharray="3 3"/>
            </svg>
            <article className="flex flex-col gap-4 font-inter text-sm w-full ml-4 md:ml-6">
                <h1 className="text-[#B7B7B7]">Apps</h1>
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
                    <p className="text-xs text-[#b7b7b7] w-7/12 ml-auto text-right">&quot;Centralized secondary marketplace solution&quot;</p>
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
                    <p className="text-xs text-[#b7b7b7] w-7/12 ml-auto text-right">&quot;Chromium extension to manage saved links with markdown integration&quot;</p>
                </div>
                <div className="flex items-center">
                    <div className="flex gap-2 items-center justify-between">
                        <Image
                            className="w-6"
                            src={mb}
                            alt='MasterBews logo'/>
                        <a href="https://masterbrews.com/" target="_blank">
                            <h2>MasterBrews ↗</h2>
                        </a>
                    </div>
                    <p className="text-xs text-[#b7b7b7] w-7/12 ml-auto text-right">&quot;MasterBews tech services website&quot;</p>
                </div>
            </article>
        </section>
    )
}