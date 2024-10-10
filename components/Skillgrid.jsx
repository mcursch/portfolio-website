import Skillcard from "./Skillcard";
import Skillimage from "./Skillimage";

export default function Skillgrid() {
    return (
        <div className="grid grid-cols-3 gap-5  px-40 ">
            <Skillcard title="Front End">
                <Skillimage link="html.png" name="HTML"/>
                <Skillimage link="css.png" name="CSS"/>
                <Skillimage link="tailwind.png" name="Tailwind"/>
            </Skillcard>
            <Skillcard title="Web Development">
                <Skillimage link="nuxt.png" name="NuxtJS"/>
                <Skillimage link="vue.webp" name="Vue"/>
                <Skillimage link="react.png" name="React"/>
                <Skillimage link="next.svg" name="Next"/>
            </Skillcard>
            <Skillcard title="Programming Languages">
                <Skillimage  link="cppimage.png" name="C++" />
                <Skillimage  link="java.svg" name="Java"/>
                <Skillimage  link="js.webp" name="JavaScript"/>
                <Skillimage  link="csharp.png" name="C#"/>
                <Skillimage  link="cimage.png" name="C" />
                <Skillimage  link="python.png" name="Python"/>
            </Skillcard>
            <Skillcard title="Version Control">
                <Skillimage  link="gitlab.png" name="GitLab"/>
                <Skillimage  link="github.png" name="GitHub"/>
            </Skillcard>
            <Skillcard title="Databases">
                <Skillimage  link="sql.png" name="SQL"/>
                <Skillimage  link="mongo.png" name="MongoDB"/>
                <Skillimage  link="maria.png" name="MariaDB"/>
                <Skillimage  link="supabase.png" name="Supabase"/>
            </Skillcard>
            <Skillcard title="Operating Systems">
                <Skillimage  link="macos.png" name="MacOS"/>
                <Skillimage  link="windows.webp" name="Windows"/>
                <Skillimage  link="linux.png" name="Linux"/>
            </Skillcard>
            <Skillcard title="CMS">
            <Skillimage  link="drupal.png" name="Drupal"/>
            </Skillcard>
          
        </div>
    )
    
}