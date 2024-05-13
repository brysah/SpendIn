export function TestimonialCard({ user }) {
    return (
        <div className="bg-secondary-500 p-[32px] h-[363px] flex items-start justify-between flex-col">
            <div className="relative block after:content-[''] after:bg-secondary-300 after:w-full after:h-[1px] after:top-[200px] after:left-[0] after:absolute after:opacity-[0.2]">
                <h6 className="text-[18px] text-primary font-semibold mb-[16px]" >{user.title}</h6>
                <p className="text-[16px] text-secondary-100 font-medium mb-[34px]" >{user.description}</p>

            </div>

            <div className="flex items-center justify-between w-[284px] ">
                <img
                    src={user.image}
                    alt={`${user} image`}
                    className="h-[70px] w-[70px] object-cover rounded-[12px] "
                />

                <div className="">
                    <h6 className="font-bold text-[18px] text-primary-100 mb-1">{user.client.name}</h6>
                    <p className="text-[14px] text-secondary-200">{user.client.job}</p>
                </div>
            </div>
        </div>
    )
}

 
