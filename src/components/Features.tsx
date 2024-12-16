import { useState } from "react"
import Feature from "./Feature"
import FeatureMenu from "./FeatureMenu"
import data from "../data"

type DataKey  = 'simple' | 'speedy' | 'easy'; 

type DataKeys = keyof typeof data; 

function Features() {
    const [selectedTab, setSelectedTab] = useState<DataKeys>('simple')

    function handleSelectedTab(value : DataKey){
        setSelectedTab(value)
    }
  return (
    <section className="mb-32">
        <div className="flex flex-col gap-4 items-center max-w-lg mx-auto px-6 mb-10">
        <h3 className="text-2xl font-bold text-darkBlue text-center">Features</h3>
        <p className="text-base text-blue text-center">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>
        <FeatureMenu onChange={handleSelectedTab} selectedTab={selectedTab}/>
        <Feature title={data[selectedTab].title} img={data[selectedTab].img} desc={data[selectedTab].desc}/>
    </section>
  )
}

export default Features