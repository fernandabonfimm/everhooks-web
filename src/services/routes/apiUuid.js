import {api} from '../Api';

export async function getUuid(id) {
    try {
      const { data } = await api.get(`/:uuid`, id);
      return data;
    } catch (error) {
      return message.error('Erro ao solicitar id');
    }
}

export async function getFirstId(id) {
    try {
      const { data } = await api.get(`/`, id);
      return data;
    } catch (error) {
      return message.error('Erro ao solicitar id');
    }
}

export async function postUuid(id) {
    try {
      const { data } = await api.post(`/:uuid`, id);
      return data;
    } catch (error) {
      return message.error('Erro ao solicitar dados do id');
    }
}
