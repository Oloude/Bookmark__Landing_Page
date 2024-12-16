 import { useState } from 'react'
import errorIcon from '../assets/icon-error.svg'

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

function Contact() {

    const [email, setEmail]= useState('')
    const [error, setError] = useState('')

    function handleEmailInput(value:string){
      setEmail(value)
    }

    function handleContactSubmit(){
        if(email && regex.test(email)){
            setError('')
        }else{
            setError('Whoops, make sure it\'s an email')
        }
    }
  return (
    <div className="bg-softBlue py-10 px-5 flex flex-col " >
       <div className="max-w-2xl mx-auto">
        <p className='text-sm text-white uppercase mb-5 text-center tracking-[5px]'> 35,000+ already joined </p>
        <h3 className='text-white font-semibold text-2xl text-center mb-7'>Stay up-to-date with what we’re doing</h3>
        <div className='flex flex-col gap-4 lg:flex-row'>
            <div   className='lg:basis-2/3'>
                <div className={`${error ? 'border border-softRed' : ''} bg-white p-3 rounded-md flex gap-3 items-center `}>
                    <input value={email} onChange={(e)=>handleEmailInput(e.target.value)} type="email" name="" id="" className='bg-inherit outline-none text-blue text-base w-full'/>
                    {error && <img src={errorIcon} alt="" />}
                </div>
                {error && <p className='bg-softRed py-1 px-2 text-white italic text-xs'>{error}</p>}
            </div>
            <button onClick={handleContactSubmit} className='bg-softRed rounded capitalize py-3 px-6 border border-softRed text-white font-medium text-sm hover:bg-white hover:text-softRed lg:self-start'>contact us</button>
        </div>
        </div></div>
  )
}

export default Contact