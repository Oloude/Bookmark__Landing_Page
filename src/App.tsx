import Contact from "./components/Contact";
import Extensions from "./components/Extensions";
import Faqs from "./components/Faqs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return <main className="font-Rubik min-h-screen">
    <Header/>
    <Hero/>
     <Features/>
     <Extensions/>
     <Faqs/>
     <Contact/>
     <Footer/>
  </main>
}
