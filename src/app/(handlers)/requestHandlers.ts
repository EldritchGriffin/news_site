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

export const getLatestPostsPaged = async (limit = 5, page = 1) => {
    try {
      const response = await api.get(`/api/posts`, {
        params: {
          'sort': 'publishedAt:desc',
          'pagination[page]': page,
          'pagination[pageSize]': limit,  
          'populate': '*'
        }
      });
      
      return {
        data: response.data.data,
        meta: response.data.meta.pagination
      };
    } catch (error) {
      console.error('Error fetching latest posts:', error);
      throw error;
    }
  }

  export const getLatestPostsFromCategory = async (category: string, limit = 5) => {
    try {
      const response = await api.get(`/api/posts?filters[category][$eq]=${category}&sort=publishedAt:desc&pagination[limit]=${limit}&populate=*`);
      return response.data;
    } catch (error) {
      console.error('Error fetching latest posts:', error);
      throw error;
    }
  }

  export const getLatestPostsFromCategoryPaged = async (category: string, limit = 5, page = 1) => {
    try {
      const response = await api.get(`/api/posts`, {
        params: {
          'filters[category][$eq]': category,
          'sort': 'publishedAt:desc',
          'pagination[page]': page,
          'pagination[pageSize]': limit,  // Changed from pagination[limit]
          'populate': '*'
        }
      });
      
      return {
        data: response.data.data,
        meta: response.data.meta.pagination
      };
    } catch (error) {
      console.error('Error fetching latest posts:', error);
      throw error;
    }
  }


// from a category get the most popular posts 
export const getMostPopularPostsFromCategory = async (category: string, limit = 5) => {
    try {
      const response = await api.get(`/api/posts?filters[category][$eq]=${category}&sort=views:desc&pagination[limit]=${limit}&populate=*`);
      return response.data;
    } catch (error) {
      console.error('Error fetching latest posts:', error);
      throw error;
    }
  }

  export const getMostPopularPostsFromCategoryPaged = async (category : string, limit = 5, page = 1) => {
    try {
      const response = await api.get(`/api/posts`, {
        params: {
          'filters[category][$eq]': category,
          'sort': 'views:desc',
          'pagination[page]': page,
          'pagination[pageSize]': limit,
          'populate': '*'
        }
      });
      return {
        data: response.data.data,
        meta: response.data.meta.pagination
      };
    } catch (error) {
      console.error('Error fetching latest posts:', error);
      throw error;
    }
  }

export const getLatestPostsFromCategoryLast7Days = async (category: string) => {
    try {
      const response = await api.get(`/api/posts?filters[category][$eq]=${category}&filters[publishedAt][$gte]=${new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()}&sort=views:desc&populate=*`);
      return response.data;
    } catch (error) {
      console.error('Error fetching latest posts:', error);
      throw error;
    }
  }

  export const getLatestPostsFromCategoryLast7DaysPaged = async (category: string, limit = 5, page = 1) => {
    try {
      const response = await api.get(`/api/posts`, {
        params: {
          'filters[category][$eq]': category,
          'filters[publishedAt][$gte]': new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
          'sort': 'views:desc',
          'pagination[page]': page,
          'pagination[pageSize]': limit,
          'populate': '*'
        }
      });
      return {
        data: response.data.data,
        meta: response.data.meta.pagination
      };
    } catch (error) {
      console.error('Error fetching latest posts:', error);
      throw error;
    }
  }

// get all the posts that were published


  export const searchPosts = async (searchTerm: string) => {
    try {
      const response = await api.get(`/api/posts?filters[title][$contains]=${searchTerm}&populate=*`);
      return response.data;
    } catch (error) {
      console.error('Error fetching latest posts:', error);
      throw error;
    }
  }

  export const getCategoriesFromLast3Days = async () => {
    try {
      const response = await api.get(`/api/posts?filters[publishedAt][$gte]=${new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()}&populate=*`);
      const categories = response.data.data.reduce((acc: any, post: any) => {
        const category = post.category;
        const views = parseInt(post.views);
        if (!acc[category]) {
          acc[category] = 0;
        }
        acc[category] += views;
        return acc;
      }, {});
      const sortedCategories = Object.entries(categories).sort((a: any, b: any) => b[1] - a[1]);
      const sortedCategoriesNames = sortedCategories.map((category: any) => category[0]);
      return sortedCategoriesNames;
    } catch (error) {
      console.error('Error fetching latest posts:', error);
      throw error;
    }
  }