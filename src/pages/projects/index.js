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
    let projects = 
    [
        {
            _id: 1,
            name: "Dopefolio",
            description:
                "Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally",
            imageUrl:
                "https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg",
        },
        {
            _id: 2,
            name: "Wilsonport",
            description:
                "Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.",
            imageUrl:
                "https://d33wubrfki0l68.cloudfront.net/9199afe42f789dbddb324ed3edd326e080e693c1/28f54/assets/jpeg/wilsonport.jpeg",
        },
    ];

    // Not a idea to call your API instead getServerSideProps(), see documentation https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props#getserversideprops-or-api-routes

    // Instead have a services folder and a project-service.js file that has code
    // to connect to your database to fetch the data. Then use a function directly
    // to get the data instead of using a REST API to avoid the need for an API call.

    // try {
    //     //const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects.json`);
    //     const response = await fetch('http://localhost:3000/api/projects');
    //     const data = await response.json();
    //     projects = data;
    // } catch (error) {
    //     console.log(error);
    // }

    return {
        props: {
            projects,
        },
    };
}