import PageDescription from "@/components/PageDescription";
import { Box, Button, Chip, Grid, Stack } from "@mui/material";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";

export default function Project({ project }) {
    return (
        <>
            <NextSeo 
                title={project.name} 
                description="{project.description}"
                openGraph={{
                    title: project.name,
                    description: project.description,
                    url: project.projectLink,
                    type: "website",                    
                }}
            />
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <PageDescription
                    title={project.name}
                    description={project.description}
                />
                <Box textAlign="center">
                    <Button
                        variant="contained"
                        size="large"
                    >
                        Project Link
                    </Button>
                </Box>
                <Box>
                    {/* <img src={project.imageUrl} alt={project.name} /> */}
                    <Image
                        src={project.imageUrl}
                        alt={project.name}
                        width={900}
                        height={600}
                    />
                </Box>
                <h1>Project Overview</h1>
                <Box>
                    <span>{project.description}</span>
                </Box>
                <h1>Tools Used</h1>                
                <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap={true}>
                    {
                        project.tools.map(tool => (
                            <Chip key={tool} label={tool} variant="outlined" />
                        ))
                    }
                </Stack>
                <Grid item sx={{ mt: "40px" }}>
                    <Link href="/projects">
                        <Button variant="contained" size="large">
                            Go Back
                        </Button>                
                    </Link>
                </Grid>
            </Grid>
        </>
    );
}

// export async function getServerSideProps(context) {
//     const id = context.params.id;
//     try {
//         const response = await fetch(`http://localhost:3000/api/projects/${id}`);
//         const project = await response.json();
//         return {
//             props: {
//                 project,
//             },
//         };
//     } catch (error) {
//         console.log(error);
//     }
// }

export async function getStaticPaths() {
    try {
        const response = await fetch(`http://localhost:3000/api/projects`);
        const projects = await response.json();
        const paths = projects.map(project => {
            return {
                params: { id: project._id.toString() },
            }
        });

        return {
            paths,
            fallback: "blocking",
        };
    }
    catch (error) {
        console.log(error);
    }
}

export async function getStaticProps({ params }) {
    try {
        const response = await fetch(`http://localhost:3000/api/projects/${params.id}`);
        const project = await response.json();
        return {
            props: {
                project,
            },
            revalidate: 5,
        }
    } catch (error) {
        console.log(error);
        return {
            notFound: true,
        }
    }
}
