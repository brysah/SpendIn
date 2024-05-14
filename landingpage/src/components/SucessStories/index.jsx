import { ToggleButton } from "../ToggleButton";
import { Stories } from "./Stories";

export function SucessStories({hasSpend,setHasSpend}) {
    return (

        <section className="bg-primary py-[120px] max-w-screen-xl w-full mx-auto px-[15px]">
            <div className="max-w-[700px] w-full mb-[64px] lg:mx-auto">
                <h4 className="text-primary-500 text-[20px] font-semibold mb-2">
                    INCREASE PRODUCTIVITY
                </h4>
                <h3 className="text-secondary-500 font-bold text-[40px] mb-5">
                    Reduce Time in Doing Manual Work Managing Expenses
                </h3>
            </div>
            <div className="relative ">
                <div className="lg:mx-auto flex rounded-[30px] bg-secondary-100 max-w-[368px] w-full mb-[48px]">
                    <ToggleButton
                        hasSpend={hasSpend}
                        text="With Spend.In"
                        onClick={() => setHasSpend(hasSpend ? hasSpend : !hasSpend)}
                    />
                    <ToggleButton
                        hasSpend={!hasSpend}
                        text="Without Spend.In"
                        onClick={() => setHasSpend(hasSpend ? !hasSpend : hasSpend)}
                    />
                </div>
                <Stories hasSpend={hasSpend} />
            </div>
        </section>
    )
}