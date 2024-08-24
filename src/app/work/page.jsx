import Project from "@/components/project/Project";
import { AllProjects } from "@/components/project/projectInfo";
const WorkPage = () =>{

    return(
        <div>
            <Project isComponent={true} compProject={AllProjects}/>
            
        </div>
    );
}

export default WorkPage;