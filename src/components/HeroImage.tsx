 import heroImg from '../assets/illustration-hero.svg'

function HeroImage() {
  return (
    <div className='w-full h-[200px] sm:w-2/3 sm:h-[300px] sm:ml-auto flex justify-end relative  lg:order-3 lg:basis-1/2'>
        <div className='bg-softBlue  w-2/3 h-full   rounded-l-full'>
        
        </div>
        <img src={heroImg} alt="" className='absolute -top-5 w-[250px] sm:w-[400px] right-16 lg:-top-24 lg:w-[500px]  '/>
        </div>
  )
}

export default HeroImage