import Extension from "./Extension"
import chromeIcon from '../assets/logo-chrome.svg'
import firefoxIcon from '../assets/logo-firefox.svg'
import operaIcon from '../assets/logo-opera.svg'

 

function Extensions() {
  return (
   <section className="mb-20">
    <div className="flex flex-col gap-4 max-w-xl mx-auto justify-center mb-10 ">
    <h2 className="text-darkBlue text-2xl font-bold text-center">Download the extension</h2>
    <p className="text-base text-blue text-center">We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize. </p>
    </div>
    <div className="flex flex-col gap-6 px-6 sm:max-w-md  lg:flex-row lg:max-w-4xl mx-auto ">
      <Extension id={1} img={ chromeIcon} title='Add to Chrome ' version=' Minimum version 62' btn="Add & Install Extension"/>
      <Extension id={2} img={ firefoxIcon} title='Add to Firefox ' version='Minimum version 55  ' btn="Add & Install Extension"/>
      <Extension id={3} img={operaIcon } title='Add to Opera ' version=' Minimum version 46' btn="Add & Install Extension"/>
    </div>
    
   </section>
  )
}

export default Extensions