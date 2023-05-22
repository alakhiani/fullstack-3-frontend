import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Chip, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProjectForm({ onSubmit, editValues }) {

    // Set up the form fields for validation
    const defaultValues = {
        name: "",
        description: "",
        overview: "",
        tools: [],
        imageUrl: "",
        projectLink: "",
    }

    const projectFormSchema = yup.object().shape({
        name: yup.string().required('A project name is required.'),
        description: yup.string().required('A project description is required.'),
        overview: yup.string().required('A project overview is required.'),
        tools: yup.array().min(1, 'At least one tool is required.'),
        imageUrl: yup.string().required('A project image url is required.'),
        projectLink: yup.string(),
    })

    const { control: formControl, watch, reset, handleSubmit } = useForm({
        defaultValues: editValues || defaultValues,
        resolver: yupResolver(projectFormSchema),
        mode: 'onChange',
    })

    const imageUrlValue = watch('imageUrl');

    // Fetch the skills list from firebase to populate the drop down
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetchSkills();
    }, []);

    const fetchSkills = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skills.json`);
            const data = await response.json();
            setSkills(data.split(","));
        } catch (error) {
            console.log(error);
        }
    }

    // Code to render the form
    return (
        <form
            id="project-form"
            onReset={() => reset(defaultValues)}
            onSubmit={handleSubmit(onSubmit)}
            style={{ padding: '24px' }}
        >
            <Grid container spacing={4}>
                <Grid item xs={8}>
                    <Controller
                        name="name"
                        control={formControl}
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                label="Project Name"
                                variant="outlined"
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="description"
                        control={formControl}
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                label="Project Description"
                                variant="outlined"
                                fullWidth
                                multiline
                                minRows={2}
                                maxRows={4}
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="overview"
                        control={formControl}
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                label="Project Overview"
                                variant="outlined"
                                fullWidth
                                multiline
                                minRows={5}
                                maxRows={8}
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputLabel id="tools-label">Tools</InputLabel>
                    <Controller
                        name="tools"
                        control={formControl}
                        render={({ field, fieldState }) => (
                            <Select
                                {...field}
                                labelId="tools-label"
                                id="tools-select"
                                variant="outlined"
                                fullWidth
                                multiple
                                renderValue={(selected) => (
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: 8,
                                        }}
                                    >
                                        {
                                            selected.map((value) => (
                                                <Chip key={value} label={value} />
                                            ))
                                        }
                                    </div>
                                )}
                            >
                                {
                                    skills.map((skill) => (
                                        <MenuItem key={skill} value={skill}>
                                            {skill}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="projectLink"
                        control={formControl}
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                label="Project Link"
                                variant="outlined"
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="imageUrl"
                        control={formControl}
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                label="Project Image URL"
                                variant="outlined"
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Grid>
                {
                    imageUrlValue &&
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image
                            src={imageUrlValue}
                            alt="Project Image"
                            width={250}
                            height={150}
                        />
                    </Grid>
                }
            </Grid>
        </form>
    );
}