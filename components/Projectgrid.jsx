import Projectcard from "./Projectcard"
export default function Projectgrid() {
    return (
        <div className="h-full w-full flex justify-center items-center">
            
            <div className="h-3/4 w-5/6  text-black">
                <div className="grid grid-cols-2 gap-4">
                    
                    <Projectcard title="Deri" image="math.jpg">
                        Object Oriented Programming combined with lexical analysis and token parsing to generate the derivative of a given equation.
                    </Projectcard>
                    <Projectcard title="ACamStorage" image="camera.png" > 
                        Full-Stack Web Application designed for the inventory storage and rental of 1000+ cameras used by local business.
                    </Projectcard>
                    <Projectcard title="WhackAMole" image="medical.png"> 
                        AI/ML Project designed to test and give elementary diagnosis and reccomendations on likelihood of cameras on various parts of the body via mobile phone photo.
                    </Projectcard>
                </div>
            </div>
        </div>
    )
}