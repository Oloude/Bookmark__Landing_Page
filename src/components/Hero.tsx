import HeroContent from "./HeroContent"
import HeroImage from "./HeroImage"

 

function Hero() {
  return (
    <article className="flex flex-col gap-10 mb-16 lg:flex-row">
        <HeroImage/>
        <HeroContent/>
    </article>
  )
}

export default Hero