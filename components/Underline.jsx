export default function Underline({color}) {
    return (
        <div className="w-full h-[3px] flex items-center justify-center">
      
            <div className={`h-[3px] w-2/3 bg-${color} rounded-full mb-2`}>

            </div>
        </div>
    )
}