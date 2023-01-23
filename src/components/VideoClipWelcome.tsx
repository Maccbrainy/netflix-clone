import { HiOutlineExclamationCircle } from "react-icons/hi";
import { IoIosPlay } from "react-icons/io";
const heroImage = `https://occ-0-3740-778.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeA9hDh48zqGMLJyRM3UQf2rmK8voBrxrBz-SYgmwaKpVL0Orp8Vh74Wb75XqfP3qU6Wg1sHNajpjZtyih2ynLwddVqgmdjYdpAE.webp?r=224`

const VideoClipWelcome = () => {
    return(
        <div className="relative right-0 left-0 top-0 w-full h-screen overflow-hidden">
                <div className="absolute w-9/12 h-full right-0 left-0 top-0 bg-gradient-to-r
              from-[#000000a7]">
                </div>
                <div className="absolute w-full h-[10%] right-0 left-0 bottom-0 bg-gradient-to-t
              from-[#141414] to-transparent">
                </div>
                <div className="absolute flex flex-col justify-center max-w-xl h-full px-6 sm:px-8 md:px-10 lg:px-14 py-4 mt-4">
                    <h1 className="text-5xl font-bold pb-4">THE LOST CITY & BATTLE FIELD</h1>
                    <p className="shadow-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className="w-full flex flex-row space-x-3 my-4">
                      <button type="button" className="flex justify-center items-center space-x-3 rounded-sm bg-white hover:bg-[#ffffffb8] text-black font-medium px-5">
                        <IoIosPlay className="w-10 h-10" />
                        <span>Play</span>
                      </button>
                      <button type="button" className="flex justify-center items-center space-x-3 rounded-sm bg-[#6d6d6eb3] hover:bg-[#6d6d6e66] text-white font-medium px-5 py-2 focus:ring focus:ring-offset-gray-600 focus:ring-offset-1 focus:ring-white">
                        <HiOutlineExclamationCircle className="w-6 h-6" />
                        <span>More Info</span>
                      </button>
                    </div>
                </div>
                <img className="w-full h-auto object-cover object-center" src={heroImage} alt="Movie thriller" /> 
            </div>
    )
}
export default VideoClipWelcome;