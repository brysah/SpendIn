import { Switch } from "@material-tailwind/react";
import { crown, flash, lovely, arrowDraw } from '../../utils/exportImages'

import { PlanCard } from "./PlanCard";

export function Pricing() {
    return (

        <section className="bg-primary py-[120px] max-w-screen-xl w-full mx-auto px-[15px]">
            <h3 className="text-[40px] text-secondary-700 font-bold text-center mb-[24px]">Ready to Get Started?</h3>
            <p className="text-[20px] text-secondary-400 text-center mb-[64px]">Choose a plan that suits your business needs</p>
            <div className="flex items-center justify-center gap-[16px] w-[249px] mx-auto mb-[28px] relative">
                <span className="font-semibold text-secondary-700 text-[20px]">Monthly</span>
                <Switch
                    id="custom-switch-component"
                    ripple={false}
                    className="h-full w-full checked:bg-primary-500"
                    containerProps={{
                        className: "w-[70px] h-[36px]",
                    }}
                    circleProps={{
                        className: "before:hidden left-0.5 border-none w-[28px] h-[28px] left-[8px]",
                    }}
                />
                <span className="font-semibold text-secondary-700 text-[20px]">Yearly</span>

                <img src={arrowDraw} alt="arrow" className="absolute top-[25px] right-0" />
            </div>
            <span className="bg-primary-100 px-[12px] py-[4px] rounded-3xl w-[89px] mx-auto text-[14px] text-secondary-700 font-medium text-center block" >Save 65%</span>
            <div className="grid grid-cols-3 gap-[24px] mt-[20px] lg:flex lg:flex-wrap lg:items-center lg:justify-center">
                <PlanCard
                    type='Free'
                    typeDesc='Perfect plan to get started'
                    icon={lovely}
                    price='0'
                    description='A free plan grants you access to some cool features of Spend.In.'
                    pros={['Sync accross device', '5 workspace', 'Collaborate with 5 user']}
                    contras={['Sharing permission', 'Admin tools', '100+ integrations']}
                    btnText='Get Your Free Plan'
                />
                <PlanCard
                    type='Pro'
                    typeDesc='Perfect plan for professionals!'
                    icon={crown}
                    price='12'
                    description='For professional only! Start arranging your expenses with our best templates.'
                    pros={['Everything in Free Plan', 'Unlimited workspace', 'Collaborative workspace', 'Sharing permission', 'Admin tools', '100+ integrations']}
                    btnText='Get Started'
                />
                <PlanCard
                    type='Ultimate'
                    typeDesc='Best suits for great company!'
                    icon={flash}
                    price='33'
                    description='If you a finance manager at big  company, this plan is a perfect match.'
                    pros={['Everything in Pro Plan', 'Daily performance reports', 'Dedicated assistant', 'Artificial intelligence', 'Marketing tools & automations', 'Advanced security']}
                    btnText='Get Started'
                />
            </div>
        </section>
    )
}