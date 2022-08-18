import {api} from '../Api';
import { message } from 'antd';

export async function getUuid() {
    try {
      const { data } = await api.get(`/ever/`);
      return data;
    } catch (error) {
      return message.error('Erro ao solicitar id');
    }
}

export async function getFirstId(id) {
    try {
      const { data } = await api.get(`/ever/${id}`);
      return data;
    } catch (error) {
      return message.error('Erro ao solicitar id');
    }
}

export async function postUuid(id, body) {
    try {
      const { data } = await api.post(`/ever/${id}`, body);
      return data;
    } catch (error) {
      return message.error('Erro ao solicitar dados do id');
    }
}
