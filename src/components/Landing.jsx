import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Sparkles } from "lucide-react";

export function Landing() {
    return (
      <div className="h-screen grid grid-cols-2 gap-4 w-10/12 mx-auto">
        <div className="w-full flex flex-col justify-center items-start">
        <div className="flex items-center mb-4 gap-2 bg-[#0f1122] px-4 py-2 rounded-4xl">
          <Sparkles className="h-5 w-5 text-[#4169e1]" />
          <span className="text-[#5664F2] font-medium">Degen Trading Extension</span>
        </div>
          <h1 className="text-4xl md:text-6xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Trade meme coins <br />
            <span className="text-[#5664F2]">on your own</span> <br />
            <span className="underline decoration-[#5664F2] text-[#5664F2]">terms.</span>
          </h1>
          <p className="my-6 font-normal text-base text-neutral-300 max-w-lg text-start">
            uxento upgrades your favorite DEX sites with a fresh interface and smart tools—so you can trade meme coins without the fuss.
          </p>
          <div className="mt-4">
            <button className="cursor-pointer py-3 px-6 bg-[#4B59E4] text-white rounded-md font-semibold" >
                Download Extension
                <FontAwesomeIcon icon={faArrowRight} className="ml-2"/>
            </button>
            <span 
                className="ml-6 font-semibold text-blue-500 cursor-pointer"
            >See the features 
                <FontAwesomeIcon icon={faChevronRight} className="ml-1" /> 
            </span>
          </div>
        </div>
        <div className="h-[80%] mt-14 w-full bg-slate-900 rounded-2xl">
          {/* You can place an image or graphic here */} mobile view here
        </div>
      </div>
    );
  }
  