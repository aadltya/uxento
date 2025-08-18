import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Sparkles } from "lucide-react";

export function Landing() {
  return (
    <div className="h-screen w-10/12 mx-auto flex flex-col justify-center items-center text-center">
      <div className="flex items-center mb-4 gap-2 bg-[#0f1122] px-4 py-2 rounded-4xl">
        <Sparkles className="h-5 w-5 text-[#4169e1]" />
        <span className="text-[#5664F2] font-medium">Degen Trading Extension</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Trade meme coins <br />
        <span className="text-[#5664F2]">on your own</span>
        <span className="underline decoration-[#5664F2] lg:ml-4 text-[#5664F2]">terms.</span>
      </h1>

      <p className="my-6 font-normal text-base text-neutral-300 max-w-lg">
        uxento upgrades your favorite DEX sites with a fresh interface and smart tools—so you can trade meme coins without the fuss.
      </p>

      <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-4">
        <button 
          className="cursor-pointer py-3 px-6 bg-[#4B59E4] text-white rounded-md font-semibold" 
          onClick={() => window.open("https://chromewebstore.google.com/detail/uxtension/pljeffieceahpjcgldlglfidenecjloh", "_blank")}
        >
          Download Extension
          <FontAwesomeIcon icon={faArrowRight} className="ml-2"/>
        </button>
        
        <span className="font-semibold text-blue-500 cursor-pointer flex items-center">
          See the features 
          <FontAwesomeIcon icon={faChevronRight} className="ml-1" /> 
        </span>
      </div>
    </div>
  );
}
