 import dots from '../assets/bg-dots.svg'
 
 
 type ExtensionProps = {
    img : string,
    title : string,
    version : string,
    btn : string,
    id: number
 }

function Extension({img, title, version, btn, id} : ExtensionProps) {
  return (
    <div className={`${
        id === 2 ? 'sm:mt-10 ' : 
        id === 3 ? 'sm:mt-20' : 
        ''
    } bg-white p-6 flex flex-col rounded-lg shadow-md self-start w-full`}>
        <div className='self-center mb-5'>
            <img src={img} alt="" />
        </div>
        <h4 className='text-center text-darkBlue text-xl font-semibold mb-3'>{title}</h4>
        <p className='text-center text-blue text-sm font-medium mb-5'>{version}</p>
        <img src={dots} alt="" className='mb-5'/>
        <button className='bg-softBlue p-3 text-white rounded-md border-2 border-softBlue font-medium text-sm hover:bg-white hover:text-softBlue'>{btn}</button>
    </div>
  )
}

export default Extension