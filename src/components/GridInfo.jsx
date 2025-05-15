import { SparklesText } from "./ui/sparkles-text";

export function GridInfo() {
    return (
      <div className='h-full w-full text-white mt-6' >
          <div className="flex justify-center ">
            <span>
              <h1>
                <SparklesText
                  text="Trade Smarter, Not Harder."
                  className="text-white text-5xl font-semibold"
                />
              </h1>
              <p className="mt-6 mb-2 font-normal text-base text-neutral-300 w-full text-center">
                Essential tools built for degen traders.
              </p>
            </span>
          </div>
      </div>
    );
  }
  