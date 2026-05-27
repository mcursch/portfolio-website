import Underline from "./Underline";

export default function Skillcard({ title, children }) {
    return (
        <div className="border-2 dark:border-gray-600 border-gray-900 rounded-2xl h-[13rem]">
            <div className="w-full h-8 text-center pt-2 font-bold dark:text-white text-gray-900">
                {title}
            </div>
            <Underline />
            <div className="grid grid-cols-3 py-3 px-16">
                {children}
            </div>
        </div>
    )
}
