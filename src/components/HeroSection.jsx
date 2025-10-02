import video1 from "../assets/profile-pictures/video1.mp4"
import video2 from "../assets/profile-pictures/video2.mp4"

function HeroSection() {
    return (
        <div className="flex flex-col items-center mt-0 md:mt-4">
            <h1 className="md:text-4xl text-3xl px-10 text-center tracking-wide">
                ScienceR build tools
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                    {" "}for developers
                </span>
            </h1>
            <p className="mt-10 text-neutral-500 px-10 md:px-32 w-full
             md:text-lg text-sm text-center">
                Enpower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-gradient-to-r from-orange-500 to-red-800 py-3 px-4 mx-3 rounded-md">
                    Start for free
                </a>
                <a href="#" className="py-3 px-4 mx-3 rounded-md border">
                    Documentation
                </a>
            </div>
            {/* <div className="mt-10 flex justify-center">
                <video autoPlay muted  className="rounded-md w-1/2 border-orange-700 shadow-orange-400 mx-6 my-4">
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag
                </video>
                <video autoPlay muted className="rounded-md w-1/2 border-orange-700 shadow-orange-400 mx-2 my-4">
                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag
                </video>
            </div> */}
        </div>
    )
}

export default HeroSection