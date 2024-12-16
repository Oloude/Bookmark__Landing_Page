import { useState } from "react"
import Faq from "./Faq"

 

function Faqs() {

    const [selectedFaq, setSelectedFaq] = useState<number | null>(null)

    function handleSelectedFaq(id: number){
        setSelectedFaq(prev => prev === id ? null : id)
    }
  return (
    <section className="mx-auto max-w-xl p-6 flex flex-col">
        <div className="flex flex-col gap-4 justify-center  mb-10">
            <h3 className="text-xl font-bold text-darkBlue text-center"> Frequently Asked Questions</h3>
            <p className="text-blue text-base text-center">Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
        </div>
        <div className="flex flex-col  gap-3 border-t border-blue mb-16">
            <Faq id={1} selectedFaq={selectedFaq} onSelect={handleSelectedFaq} question="What is Bookmark?" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."/>
            <Faq id={2} selectedFaq={selectedFaq} onSelect={handleSelectedFaq} question=" How can I request a new browser? " desc="Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."/>
            <Faq id={3} selectedFaq={selectedFaq} onSelect={handleSelectedFaq} question="Is there a mobile app? " desc="Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."/>
            <Faq id={4} selectedFaq={selectedFaq} onSelect={handleSelectedFaq} question="What about other Chromium browsers?" desc="Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."/>
        </div>
        <button className="text-white font-medium text-sm bg-softBlue py-3 px-5 rounded-md self-center">More info</button>
    </section>
  )
}

export default Faqs