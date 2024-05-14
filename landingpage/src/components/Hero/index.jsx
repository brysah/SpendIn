import dashboard from "../../assets/dashboard.png";


export function Hero() {
    return (
        <main className="bg-secondary-700 pt-[220px] relative overflow-hidden lg:pt-[150px]">

            <div className="absolute top-0 rounded-full left-0 w-[400px] h-[400px] bg-primary opacity-5 blur-[100px]"></div>
            <div className="absolute bottom-0 rounded-full right-0 w-[500px] h-[400px] bg-primary opacity-5 blur-[100px]"></div>
            <div className="absolute bottom-[-464px] rounded-full left-[-450px] w-[900px] h-[900px] opacity-5 border-primary border-[100px]"></div>
            <div className="absolute top-[-471px] rounded-full right-[-450px] w-[900px] h-[900px] opacity-5 border-primary border-[100px]"></div>
            <div className="max-w-screen-xl w-full mx-auto px-[28px]">
                <h1 className="font-bold text-[72px] text-center text-primary max-w-[800px] mx-auto leading-[150%] mb-[24px] lg:text-[64px] md:text-[32px] md:text-start">
                    All your business expenses in one place.
                </h1>
                <p className="text-secondary-300 text-center mb-[40px] text-[24px] max-w-[621px] mx-auto lg:text-[18px] md:text-[14px]">
                    Your one-stop finance empower platform. Manage all your business
                    expenses with our supafast app.{" "}
                </p>
                <div className="flex gap-3 items-center justify-center mb-[94px] lg:flex-wrap">
                    <button className="bg-primary-500 px-[31px] py-[14px] rounded-[30px] text-primary font-semibold text-[16px] hover:bg-primary-400">
                        Get a Free Demo
                    </button>
                    <button className="bg-secondary-500 py-[14px] px-[24px] rounded-[30px] text-secondary-200 font-semibold text-[16px] hover:bg-secondary-400">
                        See Pricing
                    </button>
                </div>
                <img
                    src={dashboard}
                    alt="dashboard"
                    className="w-full object-cover"
                />
            </div>
        </main>
    )
} 
