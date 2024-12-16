 type FIProps = {
    img : string
 }

function FeatureImage({img} : FIProps) {
  return (
    <div className='w-full h-[300px] sm:w-2/3 sm:h-[300px] sm:mr-auto flex justify-start  relative  lg:basis-1/2'>
        <div className='bg-softBlue  w-2/3 h-full   rounded-r-full'></div>
        <img src={img} alt=""  className='absolute -top-0 left-5 w-[300px] pr-5  sm:left-20 sm:w-[350px] sm:-top-5   lg:-top-10 lg:w-[500px]   '/>
    </div>
  )
}

export default FeatureImage