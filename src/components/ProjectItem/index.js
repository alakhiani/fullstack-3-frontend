import { Grid, Stack } from "@mui/material";
import Image from "next/image";
import ItemActions from "./ItemActions";

export default function ProjectItem({ project, handleDelete, handleEdit }) {
    return (
        <Grid container spacing={6} sx={{ pb: "40px" }}>
            <Grid item md={6}>
                <Image
                    src={project.imageUrl}
                    alt={project.name}
                    width={500}
                    height={300}
                    priority={true}
                />
            </Grid>
            <Grid item md={6}>
                <Stack spacing={4}>
                    <h3>{project.name}</h3>
                    <div>{project.description}</div>
                    <ItemActions
                        id={project._id}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                    />
                </Stack>
            </Grid>
        </Grid>
    );
}