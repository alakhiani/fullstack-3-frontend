import { getProjects, updateProject, deleteProject, createProject } from "@/api/projects";
import PageDescription from "@/components/PageDescription";
import ProjectItem from "@/components/ProjectItem";
import AddNewProjectModal from "@/components/modals/AddNewProjectModal";
import EditProjectModal from "@/components/modals/EditProjectModal";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function Admin() {

    const [editProject, setEditProject] = useState(null);
    const [isNewProjectModalVisible, setIsNewProjectModalVisible] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const data = await getProjects();
            setProjects(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleOnSubmit = async (project) => {
        const copyOfProjects = [...projects];
        if (!!project._id) { // Edit the project
            const updatedProject = await updateProject(project);
            console.log(updatedProject);
            const index = copyOfProjects.findIndex(p => p._id === updatedProject._id);
            copyOfProjects[index] = updatedProject;
        } else { // Create the project
            const newProject = await createProject(project);
            copyOfProjects.push(newProject);
        }
        setProjects(copyOfProjects);
        setIsNewProjectModalVisible(false);
    }

    const handleDelete = async (project) => {
        const isDeleted = await deleteProject(project._id);
        if (isDeleted) {
            const copyOfProjects = [...projects];
            const index = copyOfProjects.findIndex(p => p._id === project._id);
            copyOfProjects.splice(index, 1);
            setProjects(copyOfProjects);
        }
    }

    return (
        <section>
            <PageDescription
                title="Admin"
                description="Here you will be able to add and update your projects.">
            </PageDescription>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <Button
                    variant="contained"
                    size="large"
                    onClick={() => setIsNewProjectModalVisible(true)}
                >
                    Add New Project
                </Button>
            </div>
            {
                projects.map(project => (
                    <ProjectItem
                        key={project._id}
                        project={project}
                        handleDelete={() => handleDelete(project)}
                        handleEdit={() => setEditProject(project)}
                    />
                ))
            }
            <AddNewProjectModal
                open={isNewProjectModalVisible}
                onClose={() => setIsNewProjectModalVisible(false)}
                onSubmit={handleOnSubmit}
            />
            <EditProjectModal
                open={!!editProject}
                onClose={() => setEditProject(null)}
                onSubmit={handleOnSubmit}
                project={editProject}
            />
        </section>
    );
}