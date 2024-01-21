import { setToken } from "../helpers/token";
import {api} from "./api";

export async function createUser(user) {
    const response = await api.post(`/auth/registration`, {user});
    return response;
}

export async function loginUser(user) {
    const response = await api.post(`/auth/login`, user);
    await setToken(response.data.token)
    return response;
}

export async function getRole(userName) {
    const response = await api.get(`/auth/${userName}`);
    return response;
}

export async function updatePassword(data) {
    const response = await api.put(`/auth/password`, data);
    return response;
}

export async function restorePassword(data) {
    const response = await api.put(`/auth/restore-password`, data);
    return response;
}

export async function changeRole(isAdmin, userName) {
    await api.put(`/auth`, {isAdmin: isAdmin, userName: userName});
}