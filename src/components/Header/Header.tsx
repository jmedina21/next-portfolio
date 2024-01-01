import './Header.scss'
import pfp from '../../assets/images/pfp.webp';
import Image from 'next/image';

export function Header() {
    return(
        <header className="p-4 md:p-8 flex items-center justify-center text-white font-inter m-auto mt-4">
            <div className='border-l border-[#585858] border-dashed w-full'>
                <article className='header-overlay bg-[#282528] rounded-xl relative block p-4 border border-[#3D3B3E] ml-4 md:ml-6 '>
                    <div className="flex flex-col items-start space-y-2">
                        <Image src={pfp} className="rounded-full z-10 w-11 h-11" alt="Profile picture"/>
                        <h1 className="text-lg md:text-xl z-10">Pablo Medina</h1>
                        <p className="text-sm md:text-base text-[#BEBEBE] z-10">Software Engineer <br/> New York</p>
                    </div>
                    <a href='https://github.com/jmedina21' target='_blank' className="btn btn__git hidden md:block right-36" >GitHub ↗</a>
                    <a href='https://www.linkedin.com/in/pablo-medina-dev/' target='_blank' className="btn btn__link hidden md:block right-4" >LinkedIn ↗</a>
                    <a href='https://github.com/jmedina21' target='_blank' className="btn btn__git md:hidden text-xs right-4 !top-4" >GitHub ↗</a>
                    <a href='https://www.linkedin.com/in/pablo-medina-dev/' target='_blank' className="btn btn__link md:hidden text-xs right-4 !top-16" >LinkedIn ↗</a>
                </article>
            </div>
        </header>
    )
}