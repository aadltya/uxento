import { CardSpotlight } from "../components/ui/card-spotlight";

export function Grids() {
	return (
		<div id="platforms" className="min-h-screen w-11/12 md:w-10/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mt-14 cursor-default">
			<CardSpotlight className="h-52 w-full max-w-md mx-auto">
				<p className="text-xl font-bold relative z-20 mt-2 text-white">
					Enhaned Trading UI
				</p>
				<p className="text-neutral-300 mt-4 relative z-20 text-sm">
					A cleaner, more intuitive interface for your go-to DEX sites—making meme coin trading effortless for every degen.
				</p>
			</CardSpotlight>

			<CardSpotlight className="h-52 w-full max-w-md mx-auto">
				<p className="text-xl font-bold relative z-20 mt-2 text-white">
					Keyboard Shortcuts
				</p>
				<p className="text-neutral-300 mt-4 relative z-20 text-sm">
					Swift shortcuts for faster navigation and smooth trades.
				</p>
			</CardSpotlight>

			<CardSpotlight className="h-52 w-full max-w-md mx-auto">
				<p className="text-xl font-bold relative z-20 mt-2 text-white">
					Twitter Reuse Checks
				</p>
				<p className="text-neutral-300 mt-4 relative z-20 text-sm">
					Spot rebrand fakes on Twitter before they catch you off guard.
				</p>
			</CardSpotlight>

			<CardSpotlight className="h-52 w-full max-w-md mx-auto">
				<p className="text-xl font-bold relative z-20 mt-2 text-white">
					Bundle Checks
				</p>
				<p className="text-neutral-300 mt-4 relative z-20 text-sm">
					Keep track of bundled coins with enhanced data.
				</p>
			</CardSpotlight>

			<CardSpotlight className="h-52 w-full max-w-md mx-auto">
				<p className="text-xl font-bold relative z-20 mt-2 text-white">
					Domain Age Checks
				</p>
				<p className="text-neutral-300 mt-4 relative z-20 text-sm">
					Verify a domain's history to know if it's legitimate or just hype.
				</p>
			</CardSpotlight>

			<CardSpotlight className="h-52 w-full max-w-md mx-auto">
				<p className="text-xl font-bold relative z-20 mt-2 text-white">
					GitHub AI Analyzer
				</p>
				<p className="text-neutral-300 mt-4 relative z-20 text-sm">
					Analyze GitHub repos to confirm real projects, no fakes.
				</p>
			</CardSpotlight>

			<CardSpotlight className="h-52 w-full max-w-md mx-auto">
				<p className="text-xl font-bold relative z-20 mt-2 text-white">
					Built-in PNL Overlay
				</p>
				<p className="text-neutral-300 mt-4 relative z-20 text-sm">
					Monitor your gains and losses right on your screen.
				</p>
			</CardSpotlight>

			<CardSpotlight className="h-52 w-full max-w-md mx-auto">
				<p className="text-xl font-bold relative z-20 mt-2 text-white">
					Alpha Group Data
				</p>
				<p className="text-neutral-300 mt-4 relative z-20 text-sm">
					Receive instant alerts when a coin heats up in alpha groups like Potion, Shocked, and others.
				</p>
			</CardSpotlight>

			<CardSpotlight className="h-52 w-full max-w-md mx-auto">
				<p className="text-xl font-bold relative z-20 mt-2 text-white">
					Quick Twitter Searches
				</p>
				<p className="text-neutral-300 mt-4 relative z-20 text-sm">
					Fast Twitter searches for real-time updates.
				</p>
			</CardSpotlight>
		</div>
	);
}