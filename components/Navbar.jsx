export default function Navbar() {
    return (
        <div className="">

            <div className="h-fit w-1/3  absolute top-0 right-0 text-white">
            <ul className="w-full mt-2">
                <button >
                <a href="/rent">
                <li className="inline-block py-2 px-5 mx-4 mb-2 border border-[#4070F4] bg-[#010718] border-2 rounded-full hover:bg-[#4070F4]" >
                    About Me
                </li>
                </a>
                </button>
                <button>
                <li 
                className="inline-block py-2 px-5 mx-4 mb-2 border border-2 border-[#4070F4] rounded-full hover:bg-[#4070F4]">
                    Skills
                </li>
                </button>
                <button>
                <li className="inline-block py-2 px-5 mx-4 mb-2 border border-2 border-[#4070F4] rounded-full hover:bg-[#4070F4]">
                    Projects
                </li>
                </button>
                <button>
                <li className="inline-block py-2 px-5 mx-4 mb-2 border border-2 border-[#4070F4] rounded-full hover:bg-[#4070F4]">
                    Resume ↓
                </li>
                </button>
            </ul>
            </div>
            <div className="w-fit absolute bottom-0 left-0 mb-2 ml-2 text-2xl font-bold">
            </div>
        </div>
    )
  
}