import axios from "axios";

const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_STRAPI_URL}`,
    withCredentials: true,
    headers:
    {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }   
  });
  
  export const getAllPosts = async () => {
    try {
        const response = await api.get("/api/posts?populate=*");
        return response.data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
  };
export const getPostById = async (id: string) => {
    try {
        const response = await api.get(`/api/posts/${id}?populate=*`);
        return response.data;
    } catch (error) {
        console.error("Error fetching post:", error);
        throw error;
    }
}

export const getAllFromCategory = async (category: string) => {
    try {
        const response = await api.get(`/api/posts?filters[category][$eq]=${category}&populate=*`);
        return response.data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
}
