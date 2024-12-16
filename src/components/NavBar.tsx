 import faceBookIcon from '../assets/icon-facebook.svg'
 import twitterIcon from '../assets/icon-twitter.svg'
"#5267DF"
 type NavBarProps = {
    active : boolean
 }

function NavBar({active} : NavBarProps) {
  return (
   <nav className={` ${active ? 'absolute' : 'hidden'} bg-darkBlue top-16 min-h-screen z-20 w-full left-0 py-5 px-8 flex flex-col gap-52 lg:flex-row lg:gap-5 lg:bg-transparent lg:flex lg:min-h-fit lg:py-0 lg:w-auto`}>
    <div className='flex flex-col gap-7 lg:flex-row  lg:items-center'>
    <ul className='flex flex-col gap-3 lg:flex-row lg:gap-5'>
        <li className='text-white uppercase border-t border-blue text-center py-3 text-xl tracking-[5px] lg:border-none lg:text-darkBlue lg:text-sm lg:tracking-normal lg:py-0 hover:text-softRed'><a href="#">Features  </a></li>
        <li className='text-white uppercase border-t border-blue text-center py-3 text-xl tracking-[5px] lg:border-none lg:text-darkBlue lg:text-sm lg:tracking-normal lg:py-0 hover:text-softRed'><a href="#">  Pricing  </a></li>
        <li className='text-white uppercase border-t border-blue text-center py-3 text-xl tracking-[5px] border-b lg:border-none lg:text-darkBlue lg:text-sm lg:tracking-normal lg:py-0 hover:text-softRed'><a href="#"> Contact  </a></li>
    </ul>
    <button className='border-2 border-white text-white uppercase text-xl py-2 px-5 w-full lg:bg-softRed lg:border lg:border-softRed lg:text-sm lg:w-auto lg:rounded hover:lg:bg-white hover:lg:text-softRed '>Login</button>
    </div>
    <div className='flex gap-5 justify-center lg:hidden'>
        <img src={faceBookIcon} alt="" />
        <img src={twitterIcon} alt="" />
    </div>
   </nav>
  )
}

export default NavBar