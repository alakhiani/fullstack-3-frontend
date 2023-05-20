import { useRouter } from "next/router";
import { Grid, Button, Stack } from "@mui/material";
import Image from "next/image";

export default function ProjectItem({ project }) {
    const router = useRouter();

    return (
        <Grid container spacing={6} sx={{ pb: "40px" }}>
            <Grid item md={6}>
                <Image
                    src={project.imageUrl}
                    alt={project.name}
                    width={500}
                    height={300}
                />
            </Grid>
            <Grid item md={6}>
                <Stack spacing={4}>
                    <h3>{project.name}</h3>
                    <div>{project.description}</div>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => router.push(`/projects/${project._id}`)}
                    >
                        Use Case
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    );
}