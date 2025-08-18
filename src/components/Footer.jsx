import logo from "/logo.png";


export const Footer = () =>  {
    return <div>
    
    <footer className="bg-neutral-950">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <a className="flex items-center mb-4">
                    <img src={logo} className="h-8 me-3 rounded-md" alt="Logo" />
                    <span className="font-bold text-black dark:text-white text-lg">
                        <span className="text-blue-500">u</span>xento
                    </span>
                </a>
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Building in public at <a target="_blank" href="https://x.com/uxento" className="text-blue-500 ml-1" >@uxento</a></span>
            </div>
            <div className="grid grid-cols-2 gap-8 ">
                
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">Join Us</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="https://discord.com/invite/uxento" target="_blank" className="hover:underline ">Discord</a>
                        </li>
                        <li className="mb-4" >
                            <a href="https://x.com/uxento" target="_blank" className="hover:underline">Twitter</a>
                        </li>
                        <li>
                            <a href="https://t.me/uxento" target="_blank" className="hover:underline">Telegram</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>

</div>
}