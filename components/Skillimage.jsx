import Image from 'next/image';
export default function Skillimage({link, name}) {
    return (
        <div className="flex items-center justify-center">
            <div className="h-20 w-20 rounded-full relative ">
            <Image
                    className="rounded-full absolute object-cover mx-[1px] my-[1px]"
                    src={'/images/'+ link}
                    width={65}
                    height={65}
                    />
                <div className="absolute h-[70px] w-[70px]  flex items-center justify-center  bg-black/80 opacity-0  hover:opacity-100 duration-300 rounded-full">
                    <span className=" text-white">{ name }</span>
                </div>
            </div>
        </div>
    )
}