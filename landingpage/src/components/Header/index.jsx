import { useState } from 'react'
import { logo, menuHamburguer } from '../../utils/exportImages'

export function Header({ isScroll }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function tooggleMenu(){
        setIsMenuOpen(!isMenuOpen)
    }

    return (

        <>
            <header className="data-[isscrolled=true]:bg-secondary-700 bg-transparent fixed top-0 left-0 w-full z-10 transition-all" data-isscrolled={isScroll}>
                <div className="flex py-[24px] max-w-screen-xl w-full mx-auto items-center justify-between px-[15px] border-solid border-b border-secondary-200">
                    <img src={logo} alt="Company Logo" />
                    <nav className='lg:hidden'>
                        <ul className="flex gap-[40px] text-[18px] text-primary font-medium">
                            <li> <a href="">Products</a></li>
                            <li><a href="">Benefits</a></li>
                            <li><a href="">How it works</a></li>
                            <li><a href="">Pricing</a></li>
                            <li><a href="">Company</a></li>
                        </ul>
                    </nav>
                    <div className="flex gap-[25px] items-center lg:hidden">
                        <a
                            href=""
                            className="text-secondary-200 font-medium text-[18px] hover:text-secondary-300"
                        >
                            Login
                        </a>
                        <button className="bg-primary-500 py-[14px] px-[24px] rounded-[30px] text-primary font-semibold text-[16px]">
                            Get Demo
                        </button>
                    </div>
                    <button
                        className="hidden lg:inline-block"
                        onClick={tooggleMenu}>
                        <img src={menuHamburguer} alt="icon menu" />
                    </button>
                </div>
            </header>
            <div 
            data-ismenuopened = {isMenuOpen}
            className="fixed top-0 left-0 w-full h-full z-20 opacity-0 pointer-events-none transition-all 
            data-[ismenuopened=true]:overflow-hidden
            data-[ismenuopened=true]:opacity-100
            data-[ismenuopened=true]:pointer-events-auto " >
                <div className="fixed top-0 left-0 w-full h-full bg-secondary-700 z-0 opacity-50" onClick={tooggleMenu}></div>
                <aside 
                data-ismenuopened = {isMenuOpen}
                className='fixed transition-all top-0 left-0 w-[60%] h-full bg-secondary-700 translate-x-[-100%] py-5 px-5 data-[ismenuopened=true]:translate-x-[0%]'>
                    <img src={logo} alt="Logo spendIn" />
                    <ul className="flex flex-col gap-[40px] text-[18px] text-primary font-medium mt-8">
                        <li> <a href="">Products</a></li>
                        <li><a href="">Benefits</a></li>
                        <li><a href="">How it works</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Company</a></li>
                    </ul>
                </aside>
            </div>
        </>
    )
}