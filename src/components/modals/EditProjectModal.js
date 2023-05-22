import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import ProjectForm from "../forms/ProjectForm";

export default function EditProjectModal({ open, onClose, onSubmit, project }) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogTitle>
                Editing project...
            </DialogTitle>
            <DialogContent>
                <ProjectForm
                    editValues={project}
                    onSubmit={onSubmit}
                />
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    color="error"
                    type="reset"
                    form="project-form"
                    onClick={onClose}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    form="project-form"
                    onClick={onClose}
                >
                    Update Project
                </Button>
            </DialogActions>
        </Dialog>
    );
}