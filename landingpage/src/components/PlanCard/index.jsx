import error from '../../assets/error-circle-gray.png'
import check from '../../assets/check-circle.png'

export function PlanCard({ type, typeDesc, icon, price, description, pros, contras, btnText }) {
    return (
        <div className="bg-[#F3F5F7] max-w-[384px] w-full p-[32px] rounded-[12px]">
            <div className="flex items-center gap-[8px] mb-[12px]">
                <img src={icon} alt="icon" className="w-[32px] h-[32px]" />
                <h4 className="text-secondary-700 font-semiblod text-[32px]">{type}</h4>
            </div>
            <p className="text-secondary-400 text-[16px] mb-[24px]">{typeDesc}</p>
            <p className="text-secondary-400 font-medium text-[18px] mb-[24px]"><span className="text-secondary-700 text-[40px] font-semibold">${price}</span> /month</p>
            <p className="text-secondary-500 text-[16px] mb-[32px]">{description}</p>
            <ul className='flex gap-[27px] flex-col'>
                {
                    pros?.map((pros,index) => (
                        <li key={index} className='flex items-center gap-1'> <img src={check} alt="check icon" /> {pros}</li>
                    ))  
                }
                {
                    contras?.map((contra,index) =>(
                        <li key={index} className='flex items-center gap-1 text-secondary-400'> <img src={error} alt="error icon" /> {contra}</li>
                    ))
                }
            </ul>
            <button className='w-full bg-primary-500 text-primary py-[14px] mt-[40px] rounded-3xl hover:bg-primary-400'>{btnText}</button>
        </div>
    )
}