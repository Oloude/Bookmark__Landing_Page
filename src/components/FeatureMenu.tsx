type DataKey  = 'simple' | 'speedy' | 'easy'; 
 
 type FeatureMenuProps = {
    onChange : (value: DataKey)=>void,
    selectedTab : string
 }



function FeatureMenu({onChange, selectedTab} : FeatureMenuProps) {
  return (
    <div className="border-t border-blue flex flex-col mb-16  lg:border-b lg:border-t-0 lg:flex-row lg:max-w-xl lg:mx-auto lg:justify-between">
        <li onClick={()=>onChange('simple')} className={`${selectedTab === 'simple'? 'text-darkBlue after:content-[ ] after:absolute after:w-44  after:lg:w-full after:h-1 after:bg-softRed after:bottom-0 after:-translate-x-1/2 after:lg:translate-x-0 after:left-1/2 after:lg:left-0 after:right-auto after:lg:right-0  ' : 'text-blue'} relative border-b border-blue text-base text-blue py-4 text-center list-none hover:text-softRed lg:border-none `}>Simple Bookmarking </li>
        <li onClick={()=>onChange('speedy')} className={`${selectedTab === 'speedy'? 'text-darkBlue after:content-[ ] after:absolute after:w-44  after:lg:w-full after:h-1 after:bg-softRed after:bottom-0 after:-translate-x-1/2 after:lg:translate-x-0 after:left-1/2 after:lg:left-0 after:right-auto after:lg:right-0  ' : 'text-blue'} relative border-b border-blue text-base text-blue py-4 text-center list-none hover:text-softRed lg:border-none `}> Speedy Searching</li>
        <li onClick={()=>onChange('easy')} className={`${selectedTab === 'easy'? 'text-darkBlue after:content-[ ] after:absolute after:w-44  after:lg:w-full after:h-1 after:bg-softRed after:bottom-0 after:-translate-x-1/2 after:lg:translate-x-0 after:left-1/2 after:lg:left-0 after:right-auto after:lg:right-0  ' : 'text-blue'} relative border-b border-blue text-base text-blue py-4 text-center list-none hover:text-softRed lg:border-none `}>Easy Sharing</li>

    </div>
  )
}

export default FeatureMenu