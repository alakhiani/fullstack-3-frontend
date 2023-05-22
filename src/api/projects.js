const SERVER_URL = process.env.SERVER_URL;

export const getProjects = async () => {
    try {
        const response = await fetch(SERVER_URL + "/projects");
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const getProject = async (id) => {
    try {
        const response = await fetch(SERVER_URL + `/projects/${id}`);
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}

export const createProject = async (data) => {
    try {
        const response = await fetch(SERVER_URL + "/projects", {
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

export const updateProject = async (data) => {
    try {
        const response = await fetch(SERVER_URL + `/projects/${data._id}`, {
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
        const response = await fetch(SERVER_URL + `/projects/${id}`, {
            method: "DELETE",
        });
        return response.status === 204;
    } catch (error) {
        console.log(error);
        return {};
    }
}