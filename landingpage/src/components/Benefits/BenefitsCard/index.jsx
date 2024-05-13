export function BenefitsCard({imgSrc,name,description}){
    return(
        <>
            <div>
                <img src={imgSrc} alt='benefit card' className="w-full object-cover mb-[24px]"/>
                 <h5 className="text-secondary-900 font-semibold text-[24px] mb-[12px]" >{name}</h5>
                 <p className="text-secondary-400 text-[16px]" >{description}</p>
            </div>
        </>
    )
}

