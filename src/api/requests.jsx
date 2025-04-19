import api from "./api";

/**
 * Faz um GET genérico para qualquer tipo de recurso
 * @param {string} resource - Ex: 'posts', 'categorias', 'autores'
 * @param {object} params - Parâmetros opcionais
 * @returns {Promise<any>}
 */
export const getAll = async (resource, params = {}) => {
  try {
    const response = await api.get(`/${resource}`, { params });
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar ${resource}:`, error);
    throw error;
  }
};
