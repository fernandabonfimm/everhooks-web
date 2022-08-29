import { api } from "./Api";
import { message } from "antd";

export async function getUuid() {
  try {
    const { data } = await api.get(`/ever/`);
    if (!localStorage.getItem("uuid")) {
      console.log("Não existe uuid no localStorage");
      localStorage.setItem("uuid", data);
    } else {
      console.log("Já existe um uuid gravado no localStorage");
    }
    if (!localStorage.getItem("uuid")) {
      console.log("Não existe uuid no localStorage");
    } else {
      const _result = localStorage.getItem("uuid");
      return _result;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getFirstId(uuid) {
  try {
    const response = await api.get(`/ever/${uuid}`);
    return response;
  } catch (error) {
    return message.error("Erro ao solicitar dados id");
  }
}

export async function getById(id) {
  try {
    const  response  = await api.get(`/ever/id/${id}`);
    return response;
  } catch (error) {
    return message.error("Erro ao solicitar dados do id");
  }
}

export async function postUuid(id, body) {
  try {
    const { data } = await api.post(`/ever/id/${id}`, body);
    return data;
  } catch (error) {
    return message.error("Erro ao solicitar dados do id");
  }
}

export async function deleteUuid(id) {
  console.log("DELETE");
  return await api.delete(`/ever/id/${id}`);
}
