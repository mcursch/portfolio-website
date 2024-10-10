import Underline from "./Underline";

export default function Skillcard({title, children}) {
    return (
        <div className="border border-black border-2 rounded-2xl h-[13rem] ">
            <div className="w-full h-8 text-center pt-2 font-bold">
                { title }
            </div>
            <Underline/>
            <div className="grid grid-cols-3 py-3 px-16">
                { children }
            </div>
        </div>
    )
}