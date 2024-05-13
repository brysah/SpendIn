import { logo } from '../../utils/exportImages'

export function Header({ isScroll }) {
    return (

        <header className="data-[isscrolled=true]:bg-secondary-700 bg-transparent fixed top-0 left-0 w-full z-10 transition-all" data-isscrolled={isScroll}>
            <div className="flex py-[24px] max-w-screen-xl w-full mx-auto items-center justify-between px-[15px] border-solid border-b border-secondary-200">
                <img src={logo} alt="Company Logo" />
                <nav>
                    <ul className="flex gap-[40px] text-[18px] text-primary font-medium">
                        <li>
                            {" "}
                            <a href="">Products</a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a href="">Benefits</a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a href="">How it works</a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a href="">Pricing</a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a href="">Company</a>{" "}
                        </li>
                    </ul>
                </nav>
                <div className="flex gap-[25px] items-center">
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
            </div>
        </header>
    )
}