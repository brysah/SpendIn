import { withSpend, withoutSpend } from "../../utils/textSectionStories"

export function Stories({ hasSpend }) {  
    return (
        <>
            {
                hasSpend ? (
                    <div className="flex justify-between">
                        <div className="max-w-[564px] w-full">
                            <div className="text-secondary-700 text-[24px] font-bold mb-[32px]">{withSpend.title}</div>
                            <ul className="flex flex-col gap-[32px]">
                                {
                                    withSpend.details?.map((detail, index) => (
                                        <li key={index} className="flex items-start gap-[30px] text-secondary-700 font-medium text-[18px]">
                                            <img src={withSpend.list_image} alt="check icon" />
                                            {detail}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <img className="absolute top-0 right-0" src={withSpend.imageStatistics} alt="Statistics" />
                    </div>
                ) : (
                    <div className="flex justify-between">
                        <div className="max-w-[564px] w-full">
                            <div className="text-secondary-700 text-[24px] font-bold mb-[32px]">{withoutSpend.title}</div>
                            <ul className="flex flex-col gap-[32px]">
                                {
                                    withoutSpend.details?.map((detail, index) => (
                                        <li key={index} className="flex items-start gap-[30px] text-secondary-700 font-medium text-[18px]">
                                            <img src={withoutSpend.list_image} alt="check icon" />
                                            {detail}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <img className="absolute top-0 right-0" src={withoutSpend.imageStatistics} alt="Statistics" />
                    </div>
                )
            }
        </>
    )
}