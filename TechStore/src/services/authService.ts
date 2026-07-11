import api from "/api.ts";
export async function registerRequest({username, email, password, fullName}){
    const {data} = await api.post("/auth/register",{username, email, password, fullName});
    return data;
}

export async function loginRequest({username, password}){
    const {data} = await api.post("/auth/login", {username, password});
    return data;
}

export function decodeToken(token){
    try{
        const payload = token.split(".")[1];
        const decoded = JSON.parce(
            decodeURIComponent(
                atob(payload.replace(/-/g, "+").replace(/_/g, "/"))
                .split("")
                .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
                .join("")
            )
        )
    }
}
