import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Chip, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function ProjectForm() {

    const defaultValues = {
        name: "",
        description: "",
        overview: "",
        tools: [],
        imageUrl: "",
    }

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

    const projectFormSchema = yup.object().shape({
        name: yup.string().required('A project name is required.'),
        description: yup.string().required('A project description is required.'),
        overview: yup.string().required('A project overview is required.'),
        tools: yup.array().min(1, 'At least one tool is required.'),
        imageUrl: yup.string().required('A project image url is required.'),
    })

    const { control } = useForm({
        defaultValues,
        resolver: yupResolver(projectFormSchema),
        mode: 'onChange',
    })

    return (
        <form>
            <Grid container spacing={4}>
                <Grid item xs={8}>
                    <Controller
                        name="name"
                        control={control}
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
                        control={control}
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
                        control={control}
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
                        control={control}
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
            </Grid>
        </form>
    );
}