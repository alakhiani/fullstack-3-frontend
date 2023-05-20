export const getProjects = async () => {

    try {
        console.log("In getProjects " + process.env.SERVER_URL);
        const response = await fetch(process.env.SERVER_URL + "/projects");
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const getProject = async (id) => {
    try {
        const response = await fetch(process.env.SERVER_URL + `/projects/${id}`);
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}

export const createProject = async (data) => {
    try {
        const response = await fetch(process.env.SERVER_URL + "/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}

export const updateProject = async (id, data) => {
    try {
        const response = await fetch(process.env.SERVER_URL + `/projects/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}

export const deleteProject = async (id) => {
    try {
        const response = await fetch(process.env.SERVER_URL + `/projects/${id}`, {
            method: "DELETE",
        });
        const json = await response.json();
        return json.status === 204;
    } catch (error) {
        console.log(error);
        return {};
    }
}