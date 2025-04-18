
import about from "../assets/about.webp"
import about2 from "../assets/aout-2.webp"
import lowBg from "../assets/low.svg";



function About(){

    return(
 <div className="">
<div style={{ backgroundImage: `url(${lowBg})` }} className="bg-no-repeat w-full h-full py-36">
 <h1 className="flex   justify-center text-white text-6xl  font-serif"> 
    We're here to turn your supply 
    <br />
   ..... chain into a superpower

 </h1>
  <p className=" flex justify-center mx-auto py-10 text-white ">
  Crest is a company that brings together cutting-edge technology and deep supply chain  <br />
  expertise. The result is a tool that we ourselves wish we had in the beginning of our careers - <br />
   automating demand / inventory tasks, generating insights, and helping your business expand.
 </p>
  <div  >
    <img src={about} alt="" height={823} width={920}  className=" rounded-lg flex justify-center mx-auto py-12 " />
  </div>
  </div>
  
    <p className="flex mx-auto justify-center font-bold text-4xl    ">
    We are on a mission to make stock-outs go extinct so that no <br />....... business would have to lose out on a customer.
    </p>
    <div className="flex mx-auto justify-center gap-20   py-16">
    <div>
        <img src={about2} alt="" className="w-[500px] h-[500px] rounded-lg" />
    </div>
    <div className="h=[520px] w-[720px] py-9">
        <h2 className="font-bold text-4xl font-sans">
        Why did we start Crest ?
        </h2>
        <p className="py-6 w-[520px]">
            We increasingly observed how businesses have come to terms with  stockouts as part of fate and struggle to compete against industry giants  for either retail shelf space or  an e-commerce cart.  We have frequently heard  business owners state – “There’s no point in automating and having a great performance marketing campaign if the product is out of stock or takes too long to reach the customer”. A wise man once said: solve for supply chain, and you’ve solved for your business (we might have made that one up, but it’s true!).</p>
    </div>
  </div>

 </div>
    )
}

export default About;