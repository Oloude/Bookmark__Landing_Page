  type FaqProps = {
    question : string,
    desc : string,
    id : number,
    selectedFaq : number | null,
    onSelect : (id:number)=> void
  }

function Faq({question, desc, id, selectedFaq, onSelect} : FaqProps) {

     
  return (
    <div className="border-b border-blue py-4">
        <div className="flex justify-between items-center mb-4 group">
            <h4 className="text-darkBlue text-base font-medium group-hover:text-softRed">{question}</h4>
            <div onClick={()=>onSelect(id)} className={`${selectedFaq === id ? 'rotate-180' : ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke={`${ selectedFaq === id ? "#fa5757" :"#5267DF"}`} strokeWidth="3" d="M1 1l8 8 8-8"/></svg></div>
        </div>
       {selectedFaq === id && <p className="text-sm text-blue leading-7">{desc}</p>}
    </div>
  )
}

export default Faq