import Projectcard from "./Projectcard"

export default function Projectgrid() {
    return (
        <div className="h-full w-full flex justify-center items-center">
            <div className="flex flex-wrap gap-8 justify-center py-10">
                <Projectcard
                    title="DerivApp"
                    image="derivapp.png"
                    link="https://github.com/mcursch"
                >
                    A symbolic derivative calculator built with a custom lexical parser and token engine.
                    Enter any expression in x and get the exact derivative plus evaluated result.
                </Projectcard>
            </div>
        </div>
    )
}
