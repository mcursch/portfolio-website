import Underline from "./Underline";
import Image from "next/image"
export default function Projectcard ({title, image, children}) {
    return (
        <div className="border border-black border-2 rounded-2xl h-[18rem]  flex ">
                <div className="w-2/5 h-full ">
                <Image
                  className="h-full w-full rounded-l-2xl"
                    src={"/images/" + image}
                    width={600}
                    height={600}
                    />
                </div>
                <div className="flex-1 h-full ">
                    <div className="h-full w-full flex flex-col bg-white rounded-r-xl">
                        <div className ="h-10 w-full flex justify-center items-end text-xl font-serif font-bold">
                            { title }
                        </div>
                        <Underline color="black"/>
                        <div className="flex-1 bg-white flex justify-center items-center px-5 pb-8 font-bold font-serif rounded-r-xl">
                            {children }
                        </div>

                    </div>
                </div>

        
        </div>
    )
}