import logo from "./assets/logo.png";
import dashboard from "./assets/dashboard.png";
import { Benefits } from "./components/Benefits";
import benefit1 from "./assets/benefit-1.png";
import benefit2 from "./assets/benefit-2.png";
import benefit3 from "./assets/benefit-3.png";
import { WorkItem } from "./components/WorkItem";
import workitem1 from "./assets/workitem-1.png";
import workitem2 from "./assets/workitem-2.png";
import workitem3 from "./assets/workitem-3.png";
import arrowR from "./assets/arrow-right.png";
import arrowL from "./assets/arrow-left.png";
import { useState } from "react";
import { ToggleButton } from "./components/ToggleButton";
import { Stories } from "./components/Stories";
import { testimonials } from "./utils/testimonials";
import { TestimonialCard } from "./components/TestmonialCard";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Switch } from "@material-tailwind/react";
import drawArrow from './assets/arrow-draw.png'
import { PlanCard } from "./components/PlanCard";
import crown from './assets/icon-crown.png';
import flash from './assets/icon-flash.png';
import lovely from './assets/icon-lovely.png';
import logoDark from './assets/logo-dark.png'
import "swiper/css";
import "swiper/css/navigation";

function App() {
  const [hasSpend, setHasSpend] = useState(true);

  return (
    <>
      <header className="bg-transparent fixed top-0 left-0 w-full">
        <div className="flex py-[24px] max-w-screen-xl w-full mx-auto items-center justify-between px-[15px] border-solid border-b border-secondary-200">
          <img src={logo} alt="Company Logo" />
          <nav>
            <ul className="flex gap-[40px] text-[18px] text-primary font-medium">
              <li>
                {" "}
                <a href="">Products</a>{" "}
              </li>
              <li>
                {" "}
                <a href="">Benefits</a>{" "}
              </li>
              <li>
                {" "}
                <a href="">How it works</a>{" "}
              </li>
              <li>
                {" "}
                <a href="">Pricing</a>{" "}
              </li>
              <li>
                {" "}
                <a href="">Company</a>{" "}
              </li>
            </ul>
          </nav>
          <div className="flex gap-[25px] items-center">
            <a
              href=""
              className="text-secondary-200 font-medium text-[18px] hover:text-secondary-300"
            >
              Login
            </a>
            <button className="bg-primary-500 py-[14px] px-[24px] rounded-[30px] text-primary font-semibold text-[16px]">
              Get Demo
            </button>
          </div>
        </div>
      </header>
      <main className="bg-secondary-700 pt-[220px] ">
        <div className="max-w-screen-xl w-full mx-auto">
          <h1 className="font-bold text-[72px] text-center text-primary max-w-[800px] mx-auto leading-[150%] mb-[24px]">
            All your business expenses in one place.
          </h1>
          <p className="text-secondary-300 text-center mb-[40px] text-[24px] max-w-[621px] mx-auto">
            Your one-stop finance empower platform. Manage all your business
            expenses with our supafast app.{" "}
          </p>
          <div className="flex gap-3 items-center justify-center mb-[94px]">
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
          <Benefits
            name="Automatic Invoice Payment"
            description="No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you're done, it's that easy!"
            imgSrc={benefit1}
          />
          <Benefits
            name="Clear payment history"
            description="Still writing manual expenses? Our platform breaks down every expense you log down to the millisecond!"
            imgSrc={benefit2}
          />
          <Benefits
            name="Use of multi-card payments"
            description="Have more than 1 bank account or credit/debit card? Our platform is already integrated with many banks around the world, for easier payments!"
            imgSrc={benefit3}
          />
        </div>
      </section>
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
        <div className="grid grid-cols-3 mb-[64px]">
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
        <div className="flex gap-3 items-center justify-center ">
          <button className="bg-primary-500 px-[31px] py-[14px] rounded-[30px] text-primary font-semibold text-[16px] hover:bg-primary-400">
            Get a Free Demo
          </button>
          <button className="bg-secondary-500 py-[14px] px-[24px] rounded-[30px] text-secondary-200 font-semibold text-[16px] hover:bg-secondary-400">
            See Pricing
          </button>
        </div>
      </section>
      <section className="bg-primary py-[120px] max-w-screen-xl w-full mx-auto px-[15px]">
        <div className="max-w-[700px] w-full mb-[64px]">
          <h4 className="text-primary-500 text-[20px] font-semibold mb-2">
            INCREASE PRODUCTIVITY
          </h4>
          <h3 className="text-secondary-500 font-bold text-[40px] mb-5">
            Reduce Time in Doing Manual Work Managing Expenses
          </h3>
        </div>
        <div className="relative">
          <div className="flex rounded-[30px] bg-secondary-100 max-w-[368px] w-full mb-[48px]">
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
      <section className="bg-secondary-700 py-[120px] max-w-screen-xl w-full mx-auto px-[15px] relative">
        <div className="absolute top-0 rounded-full left-0 w-[400px] h-[400px] bg-primary opacity-5 blur-[100px]"></div>
        <div className="absolute bottom-0 rounded-full right-0 w-[500px] h-[400px] bg-primary opacity-5 blur-[100px]"></div>
        <div className="mx-auto  max-w-[720px] w-full">
          <h5 className="text-primary-500 text-[20px] font-semibold mb-2 text-center">
            WHAT THEY SAY
          </h5>
          <h4 className="font-bold text-[40px] text-primary text-center mb-3">
            Our User Kind Words
          </h4>
          <p className="text-secondary-300 text-[20px] mb-[39px] text-center">
            Here are some testimonials from our user after using Spend.In to
            manage their business expenses.
          </p>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={3}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
        >
          {testimonials?.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard user={testimonial} />
            </SwiperSlide>
          ))}
          <div className="flex gap-[20px] max-w-[122px] w-full mx-auto h-[50px] items-center justify-between mt-[64px]">
            <div className="swiper-button-prev static m-0 after:content-[''] rounded-full bg-primary-500 w-[50px] h-[50px]">
              <img src={arrowL} alt="left arrow" />
            </div>
            <div className="swiper-button-next static m-0 after:content-[''] rounded-full bg-primary-500 w-[50px] h-[50px]">
              <img src={arrowR} alt="right arrow" />
            </div>
          </div>
        </Swiper>
      </section>
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

          <img src={drawArrow} alt="arrow" className="absolute top-[25px] right-0" />
        </div>
        <span className="bg-primary-100 px-[12px] py-[4px] rounded-3xl w-[89px] mx-auto text-[14px] text-secondary-700 font-medium text-center block" >Save 65%</span>
        <div className="grid grid-cols-3 gap-[24px] mt-[20px]">
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
      <footer className="py-[120px] bg-primary max-w-screen-xl w-full mx-auto px-[15px]">
        <div className="flex justify-between">
          <div className="w-[190px]">
            <img src={logoDark} alt="logo spendIn" />
            <p className="text-secondary-400 text-[18px] mt-[32px]">Data visualization, and expense management for your business.</p>
          </div>
          <div className="flex justify-between gap-[72px]">
            <div className="">
              <strong className="text-secondary-500 text-[20px] font-semibold ">Product</strong>
              <ul className="flex flex-col mt-[32px] gap-[32px]">
                <li><a href="" className="text-secondary-400 text-[16px]">Digital Invoice</a></li>
                <li><a href="" className="text-secondary-400 text-[16px]">Insights</a></li>
                <li><a href="" className="text-secondary-400 text-[16px]">Reimbursements</a></li>
                <li><a href="" className="text-secondary-400 text-[16px]">Virtual Assistant</a></li>
                <li><a href="" className="text-secondary-400 text-[16px]">Artificial Intelligence</a></li>
              </ul>
            </div>
            <div className="">
              <strong className="text-secondary-500 text-[20px] font-semibold ">Company</strong>
              <ul className="flex flex-col mt-[32px] gap-[32px]">
                <li><a href="" className="text-secondary-400 text-[16px]">About Us</a></li>
                <li><a href="" className="text-secondary-400 text-[16px]">Newsletters</a></li>
                <li><a href="" className="text-secondary-400 text-[16px]">Our Partners</a></li>
                <li><a href="" className="text-secondary-400 text-[16px]">Career</a></li>
                <li><a href="" className="text-secondary-400 text-[16px]">Contact Us</a></li>
              </ul>
            </div>
            <div className="">
              <strong className="text-secondary-500 text-[20px] font-semibold ">Resources</strong>
              <ul className="flex flex-col  mt-[32px] gap-[32px]">
                <li><a href="" className="text-secondary-400 text-[16px]">Blog</a></li>
                <li><a href="" className="text-secondary-400 text-[16px]">Pricing</a></li>
                <li><a href="" className="text-secondary-400 text-[16px]">FAQ</a></li>
                <li><a href="" className="text-secondary-400 text-[16px]">Events</a></li>
                <li><a href="" className="text-secondary-400 text-[16px]">Ebook & Guide</a></li>
              </ul>
            </div>
            <div className="">
              <strong className="text-secondary-500 text-[20px] font-semibold ">Follow Us</strong>
              <ul className="flex flex-col  mt-[32px] gap-[32px]">
                <li><a href="" className="text-secondary-400 text-[16px]">LinkedIn</a></li>
                <li><a href="" className="text-secondary-400 text-[16px]">Twitter</a></li>
                <li><a href="" className="text-secondary-400 text-[16px]">Instagram</a></li>
                <li><a href="" className="text-secondary-400 text-[16px]">Facebook</a></li>
                <li><a href="" className="text-secondary-400 text-[16px]">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-[64px] bg-primary-200 h-[1px] w-full"></div>
      </footer>
    </>
  );
}

export default App;
