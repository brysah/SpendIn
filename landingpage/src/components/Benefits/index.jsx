import { BenefitsCard } from "./BenefitsCard";
import { benefit1, benefit2, benefit3 } from '../../utils/exportImages'

export function Benefits() {
    return (
        <section className="bg-primary pt-[120px] max-w-screen-xl w-full mx-auto px-[15px] mb-[120px]">
            <div className="flex max-w-[904px] items-center justify-between mb-[79px]">
                <div>
                    <h4 className="text-primary-500 font-semibold text-[20px] mb-2">
                        WHY USE SPEND.IN
                    </h4>
                    <h3 className="text-secondary-900 font-bold text-[40px]">
                        Easy, Simple, Affordable
                    </h3>
                </div>
                <div>
                    <p className="max-w-[496px] text-secondary-400 text-[20px]">
                        Our platform helps your business in managing expenses. These are
                        some of the reasons why you should use our platform in managing
                        business finances.
                    </p>
                </div>
            </div>

            <div className="grid w-full grid-cols-3 gap-[24px]">
                <BenefitsCard
                    name="Automatic Invoice Payment"
                    description="No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you're done, it's that easy!"
                    imgSrc={benefit1}
                />
                <BenefitsCard
                    name="Clear payment history"
                    description="Still writing manual expenses? Our platform breaks down every expense you log down to the millisecond!"
                    imgSrc={benefit2}
                />
                <BenefitsCard
                    name="Use of multi-card payments"
                    description="Have more than 1 bank account or credit/debit card? Our platform is already integrated with many banks around the world, for easier payments!"
                    imgSrc={benefit3}
                />
            </div>
        </section>
    )
}