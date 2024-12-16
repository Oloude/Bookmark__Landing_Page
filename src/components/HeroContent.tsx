 

function HeroContent() {
  return (
    <div className="flex flex-col p-6 items-center gap-6  lg:items-start lg:basis-1/2 lg:max-w-md lg:mx-auto lg:pl-14">
        <h1 className="text-3xl font-semibold text-darkBlue text-center lg:text-left ">A Simple Bookmark Manager </h1>
        <p className="text-blue text-base text-center lg:text-left">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
        <div className="flex gap-4">
            <button className="text-white text-xs sm:text-sm font-medium rounded-md border-2 border-softBlue bg-softBlue py-2 px-5 hover:bg-white hover:text-softBlue ">Get it on Chrome </button>
            <button className="text-darkBlue text-xs sm:text-sm shadow-md   font-medium rounded-md   bg-opacity-20 bg-blue py-2 px-5 hover:bg-white   hover:bg-opacity-100 hover:border-2 hover:border-darkBlue">Get it on Firefox</button>
        </div>
    </div>
  )
}

export default HeroContent