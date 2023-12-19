import './Header.scss'
import { Stich } from "../Stitch/Stich";
import pfp from '../../assets/images/pfp.png';
import Image from 'next/image';

export function Header() {
    return(
        <header className="p-8 flex space-x-6 items-center text-white font-inter m-auto max-w-3xl">
            <Stich />
            <article className='header-overlay bg-[#282528] rounded-xl relative block p-4 w-full border border-[#3D3B3E]'>
                <div className="flex flex-col items-start space-y-2">
                    <Image src={pfp} className="rounded-full z-10 w-11 h-11" alt="Profile picture"/>
                    <h1 className="text-lg z-10">Pablo Medina</h1>
                    <p className="text-sm text-[#BEBEBE] z-10">Software Engineer <br/> New York</p>
                </div>
                {/* <a href='https://github.com/jmedina21' target='_blank' className="btn btn__git bg-white rounded-xl text-black p-2 pl-8" >GitHub ↗</a>
                <a href='https://github.com/jmedina21' target='_blank' className="btn btn__link bg-white rounded-xl text-black p-2 pl-8" >LinkedIn ↗</a> */}
                <a href='https://github.com/jmedina21' target='_blank' className="btn btn__git bg-white rounded-xl text-black p-1 pl-8 md:hidden" >↗</a>
                <a href='https://github.com/jmedina21' target='_blank' className="btn btn__link bg-white rounded-xl text-black p-1 pl-8 md:hidden" >↗</a>
            </article>
        </header>
    )
}