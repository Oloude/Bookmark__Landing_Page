import FeatureImage from "./FeatureImage" 
 

type FProps = {
    title : string,
    img : string,
    desc : string
}

function Feature({title, img, desc} : FProps) {
  return (
    <div className="flex flex-col gap-8 lg:flex-row  ">
        <FeatureImage img={img}/>
        <div className="flex flex-col gap-4 items-center p-6 lg:items-start lg:basis-1/2 lg:max-w-md lg:mr-auto lg:pl-0">
            <h4 className="text-2xl font-bold text-center text-darkBlue lg:text-left">{title}</h4>
            <p className="text-base text-blue text-center lg:text-left">{desc}</p>
        <button className="text-white font-medium text-sm py-2 px-5 rounded-md bg-softBlue hidden lg:block">More info</button>
        </div>
    </div>
  )
}

export default Feature