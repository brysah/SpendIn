import { WorkItem } from "./WorkItem";
import { workitem1, workitem2, workitem3 } from '../../utils/exportImages'

export function HowItWorks() {
    return (

        <section className="bg-secondary-700 py-[120px] max-w-screen-xl w-full mx-auto px-[15px] relative">
            <div className="absolute top-0 rounded-full left-0 w-[400px] h-[400px] bg-primary opacity-5 blur-[100px]"></div>
            <div className="absolute bottom-0 rounded-full right-0 w-[500px] h-[400px] bg-primary opacity-5 blur-[100px]"></div>

            <div className="mx-auto  max-w-[720px] w-full">
                <h5 className="text-primary-500 text-[20px] font-semibold mb-2 text-center">
                    HOW IT WORKS
                </h5>
                <h4 className="font-bold text-[40px] text-primary text-center mb-3">
                    Few Easy Steps and Done
                </h4>
                <p className="text-secondary-300 text-[20px] mb-[39px] text-center">
                    In just few easy step, you are all set to manage your business
                    finances. Manage all expenses with Spend.In all in one place.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-[20px] mb-[64px] lg:flex lg:flex-wrap lg:items-center lg:justify-center">
                <WorkItem
                    text="Register your Spend.In account."
                    index="1"
                    imgSrc={workitem1}
                />
                <WorkItem
                    text="Fill in the list of your 
        business expenses."
                    index="2"
                    imgSrc={workitem2}
                />
                <WorkItem
                    text="Done, let’s continue the work."
                    index="3"
                    imgSrc={workitem3}
                />
            </div>
            <div className="flex gap-3 items-center justify-center  lg:flex-wrap ">
                <button className="bg-primary-500 px-[31px] py-[14px] rounded-[30px] text-primary font-semibold text-[16px] hover:bg-primary-400">
                    Get a Free Demo
                </button>
                <button className="bg-secondary-500 py-[14px] px-[24px] rounded-[30px] text-secondary-200 font-semibold text-[16px] hover:bg-secondary-400">
                    See Pricing
                </button>
            </div>
        </section>
    )
}