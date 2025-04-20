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
export const getPostByDocumentId = async (documentId: string) => {
    try {
        const response = await api.get(`/api/posts/${documentId}?populate=*`);
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

export const getLatestPosts = async (limit = 5) => {
    try {
      const response = await api.get(`/api/posts?sort=publishedAt:desc&pagination[limit]=${limit}&populate=*`);
      return response.data;
    } catch (error) {
      console.error('Error fetching latest posts:', error);
      throw error;
    }
  };

  export const getLatestPostsFromCategory = async (category: string, limit = 5) => {
    try {
      const response = await api.get(`/api/posts?filters[category][$eq]=${category}&sort=publishedAt:desc&pagination[limit]=${limit}&populate=*`);
      return response.data;
    } catch (error) {
      console.error('Error fetching latest posts:', error);
      throw error;
    }
  }