import { getProjects } from "@/api/projects";
import PageDescription from "@/components/PageDescription";
import ProjectItem from "@/components/ProjectItem";

export default function Projects( { projects } ) {
    return (
        <section>
            <PageDescription 
                title="Projects"
                description="Here you will find some personal and some client projects that I created."
            />

            {
                projects.map(project => (
                    <ProjectItem key={project._id} project={project} />
                ))
            }
        </section>
    );
}

export async function getServerSideProps() {
    const projects = await getProjects();
    return {
        props: {
            projects,
        },
    };
}