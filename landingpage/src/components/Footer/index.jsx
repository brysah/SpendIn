import { logoDark } from '../../utils/exportImages'

export function Footer() {
    return (
        <footer className="py-[120px] bg-primary max-w-screen-xl w-full mx-auto px-[15px]">
            <div className="flex justify-between">
                <div className="w-[190px]">
                    <img src={logoDark} alt="logo spendIn" />
                    <p className="text-secondary-400 text-[18px] mt-[32px]">Data visualization, and expense management for your business.</p>
                </div>
                <div className="flex justify-between gap-[72px]">
                    <div className="">
                        <strong className="text-secondary-500 text-[20px] font-semibold ">Product</strong>
                        <ul className="flex flex-col mt-[32px] gap-[32px]">
                            <li><a href="" className="text-secondary-400 text-[16px]">Digital Invoice</a></li>
                            <li><a href="" className="text-secondary-400 text-[16px]">Insights</a></li>
                            <li><a href="" className="text-secondary-400 text-[16px]">Reimbursements</a></li>
                            <li><a href="" className="text-secondary-400 text-[16px]">Virtual Assistant</a></li>
                            <li><a href="" className="text-secondary-400 text-[16px]">Artificial Intelligence</a></li>
                        </ul>
                    </div>
                    <div className="">
                        <strong className="text-secondary-500 text-[20px] font-semibold ">Company</strong>
                        <ul className="flex flex-col mt-[32px] gap-[32px]">
                            <li><a href="" className="text-secondary-400 text-[16px]">About Us</a></li>
                            <li><a href="" className="text-secondary-400 text-[16px]">Newsletters</a></li>
                            <li><a href="" className="text-secondary-400 text-[16px]">Our Partners</a></li>
                            <li><a href="" className="text-secondary-400 text-[16px]">Career</a></li>
                            <li><a href="" className="text-secondary-400 text-[16px]">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="">
                        <strong className="text-secondary-500 text-[20px] font-semibold ">Resources</strong>
                        <ul className="flex flex-col  mt-[32px] gap-[32px]">
                            <li><a href="" className="text-secondary-400 text-[16px]">Blog</a></li>
                            <li><a href="" className="text-secondary-400 text-[16px]">Pricing</a></li>
                            <li><a href="" className="text-secondary-400 text-[16px]">FAQ</a></li>
                            <li><a href="" className="text-secondary-400 text-[16px]">Events</a></li>
                            <li><a href="" className="text-secondary-400 text-[16px]">Ebook & Guide</a></li>
                        </ul>
                    </div>
                    <div className="">
                        <strong className="text-secondary-500 text-[20px] font-semibold ">Follow Us</strong>
                        <ul className="flex flex-col  mt-[32px] gap-[32px]">
                            <li><a href="" className="text-secondary-400 text-[16px]">LinkedIn</a></li>
                            <li><a href="" className="text-secondary-400 text-[16px]">Twitter</a></li>
                            <li><a href="" className="text-secondary-400 text-[16px]">Instagram</a></li>
                            <li><a href="" className="text-secondary-400 text-[16px]">Facebook</a></li>
                            <li><a href="" className="text-secondary-400 text-[16px]">YouTube</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-[64px] bg-primary-200 h-[1px] w-full"></div>
        </footer>
    )
}