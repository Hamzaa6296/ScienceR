import { testimonials } from "../constants"


function Testimonials() {
  return (
    <div className="mt-20 px-5 container mx-auto">
        <h2 className="text-2xl md:text-6xl text-center my-10 lg:my-20">
            What prople are saying
        </h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((testemonial, index) => (
                <div key={index} className=" w-full sm:w-1/2 lg:w-1/3">
                    <div className="bg-neutral rounded-md p-6 mr-4 mb-3 text-sm border border-neutral-800 ">
                        <p>{testemonial.text}</p>
                        <div className="flex mt-8 items-start">
                            <img className="w-12 h-12 mr-6 rounded-full border border-neutral-300" src={testemonial.image} alt={testemonial.user} />
                            <h6>{testemonial.user}</h6>
                            <span className="text-sm font-normal italic text-neutral-600">{testemonial.company}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials