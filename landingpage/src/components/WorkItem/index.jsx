export function WorkItem({ imgSrc,text,index }) {
    return (
        <>
            <div className="w-full max-w-[200px] mx-auto">
                <div className="relative mb-[24px]">
                    <div className="w-[50px] rounded-full h-[50px] bg-primary-500 font-semibold text-primary text-center text-[24px] absolute top-[-20px] left-[20px] border-4 border-secondary-700">{index}</div>
                    <img src={imgSrc} alt="how it works" className="object-cover mx-auto"/>
                </div>
                <p className="font-medium text-[20px] text-primary text-center">{text}</p>
            </div>
        </>
    )
}