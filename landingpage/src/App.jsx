import logo from './assets/logo.png'
import dashboard from './assets/dashboard.png'
import { Benefits } from './components/Benefits'
import benefit1 from './assets/benefit-1.png'
import benefit2 from './assets/benefit-2.png'
import benefit3 from './assets/benefit-3.png'

function App() {
  return (
    <>
      <header className='bg-transparent fixed top-0 left-0 w-full'>
        <div className="flex py-[24px] max-w-screen-xl w-full mx-auto items-center justify-between px-[15px] border-solid border-b border-secondary-200">
          <img src={logo} alt="Company Logo" />
          <nav>
            <ul className='flex gap-[40px] text-[18px] text-primary font-medium'>
              <li> <a href="">Products</a> </li>
              <li> <a href="">Benefits</a> </li>
              <li> <a href="">How it works</a> </li>
              <li> <a href="">Pricing</a> </li>
              <li> <a href="">Company</a> </li>
            </ul>
          </nav>
          <div className='flex gap-[25px] items-center'>
            <a href="" className='text-secondary-200 font-medium text-[18px] hover:text-secondary-300'>Login</a>
            <button className='bg-primary-500 py-[14px] px-[24px] rounded-[30px] text-primary font-semibold text-[16px]' >Get Demo</button>
          </div>
        </div>
      </header>
      <main className='bg-secondary-700 pt-[220px] '>
        <div className="max-w-screen-xl w-full mx-auto">
          <h1 className='font-bold text-[72px] text-center text-primary max-w-[800px] mx-auto leading-[150%] mb-[24px]'>All your business expenses in one place.</h1>
          <p className='text-secondary-300 text-center mb-[40px] text-[24px] max-w-[621px] mx-auto'>Your one-stop finance empower platform.
            Manage all your business expenses with our supafast app. </p>
          <div className="flex gap-3 items-center justify-center mb-[94px]">
            <button className='bg-primary-500 px-[31px] py-[14px] rounded-[30px] text-primary font-semibold text-[16px] hover:bg-primary-400' >Get a Free Demo</button>
            <button className='bg-secondary-500 py-[14px] px-[24px] rounded-[30px] text-secondary-200 font-semibold text-[16px] hover:bg-secondary-400' >See Princing</button>
          </div>
          <img src={dashboard} alt="dashboard" className='w-full object-cover' />
        </div>
      </main>
      <section className='bg-primary pt-[120px] max-w-screen-xl w-full mx-auto px-[15px] mb-[120px]' >
        <div className="flex max-w-[904px] items-center justify-between mb-[79px]">
          <div>
            <h4 className='text-primary-500 font-semibold text-[20px] mb-2'>WHY USE SPEND.IN</h4>
            <h3 className='text-secondary-900 font-bold text-[40px]'>Easy, Simple, Affordable</h3>
          </div>
          <div>
          <p className='max-w-[496px] text-secondary-400 text-[20px]'>Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.</p>
          </div>
        </div>
        
        <div className="grid w-full grid-cols-3 gap-[24px]">
            <Benefits 
            name='Automatic Invoice Payment'
            description="No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you're done, it's that easy!"
            imgSrc={benefit1}
            />
            <Benefits 
            name='Clear payment history'
            description="Still writing manual expenses? Our platform breaks down every expense you log down to the millisecond!"
            imgSrc={benefit2}
            />
            <Benefits 
            name='Use of multi-card payments'
            description="Have more than 1 bank account or credit/debit card? Our platform is already integrated with many banks around the world, for easier payments!"
            imgSrc={benefit3}
            />
          </div>
      </section>
    </>
  )
}

export default App
