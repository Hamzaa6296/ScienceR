import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";


function Pricing() {
    return (
        <div className="mt-20 container px-10 md:max-w-8xl lg:w-full items-center lg:ml-10">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
                Pricing
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pricingOptions.map((price, index) => (
                    <div
                        key={index}
                        className="p-10 border border-neutral-700 rounded-xl h-full flex flex-col"
                    >
                        <p className="text-4xl mb-8">
                            {price.title}
                            {price.title === "Pro" && (
                                <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text mb-4 ml-2 text-xl">
                                    (Most Popular)
                                </span>
                            )}
                        </p>
                        <p className="mb-8">
                            <span className="text-6xl mt-6 mr-2">{price.price}</span>
                            <span className="text-neutral-400 tracking-tight">/Month</span>
                        </p>
                        <ul className="flex-1">
                            {price.features.map((feature, index) => (
                                <li key={index} className="mt-8 items-center flex">
                                    <CheckCircle2 />
                                    <span className="ml-2">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#"
                            className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-10 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
                        >
                            Subscribe
                        </a>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Pricing