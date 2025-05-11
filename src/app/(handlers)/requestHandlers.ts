import { strapi } from '@strapi/client';

const client = strapi({
  baseURL: `${process.env.NEXT_PUBLIC_STRAPI_URL}/api` as string,
  auth: process.env.STRAPI_API_TOKEN,
});

export const getAllPosts = async () => {
  try {
    const response = await client.collection('posts').find({
      sort: 'publishedAt:asc',
      populate: '*'
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const getAllPostsPaged = async (limit = 5, page = 1) => {
  try {
    const response = await client.collection('posts').find({
      sort: 'publishedAt:asc',
      pagination: {
        page,
        pageSize: limit
      },
      populate: '*'
    });
    return response.data
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

export const getPostByDocumentId = async (documentId: string) => {
  try {
    const response = await client.collection('posts').findOne(documentId, {
      populate: '*'
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
}

export const getAllFromCategory = async (category: string) => {
  try {
    const response = await client.collection('posts').find({
      filters: {
        category: {
          $eq: category
        }
      },
      sort: 'publishedAt:asc',
      populate: '*'
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

export const getLatestPosts = async (limit = 5) => {
  try {
    const response = await client.collection('posts').find({
      sort: 'publishedAt:desc',
      pagination: {
        page: 1,
        pageSize: limit
      },
      populate: '*'
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    throw error;
  }
};

export const getLatestPostsPaged = async (limit = 5, page = 1) => {
  try {
    const response = await client.collection('posts').find({
      sort: 'publishedAt:desc',
      pagination: {
        page,
        pageSize: limit
      },
      populate: '*'
    });
    return response.data
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    throw error;
  }
}

export const getLatestPostsFromCategory = async (category: string, limit = 5) => {
  try {
    const response = await client.collection('posts').find({
      filters: {
        category: {
          $eq: category
        }
      },
      sort: 'publishedAt:desc',
      pagination: {
        page: 1,
        pageSize: limit
      },
      populate: '*'
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    throw error;
  }
}

export const getLatestPostsFromCategoryPaged = async (category: string, limit = 5, page = 1) => {
  try {
    const response = await client.collection('posts').find({
      filters: {
        category: {
          $eq: category
        }
      },
      sort: 'publishedAt:desc',
      pagination: {
        page,
        pageSize: limit
      },
      populate: '*'
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    throw error;
  }
}


export const getMostPopularPostsFromCategory = async (category: string, limit = 5) => {
  try {
    const response = await client.collection('posts').find({
      filters: {
        category: {
          $eq: category
        }
      },
      sort: 'views:desc',
      pagination: {
        page: 1,
        pageSize: limit
      },
      populate: '*'
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    throw error;
  }
}

export const getMostPopularPostsFromCategoryPaged = async (category: string, limit = 5, page = 1) => {
  try {
    const response = await client.collection('posts').find({
      filters: {
        category: {
          $eq: category
        }
      },
      sort: 'views:desc',
      pagination: {
        page,
        pageSize: limit
      },
      populate: '*'
    });
    return response.data
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    throw error;
  }
}

export const getLatestPostsFromCategoryLast7Days = async (category: string) => {
  try {
    const response = await client.collection('posts').find({
      filters: {
        category: {
          $eq: category
        },
        publishedAt: {
          $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
        }
      },
      sort: 'publishedAt:desc',
      pagination: {
        page: 1,
        pageSize: 5
      },
      populate: '*'
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    throw error;
  }
}

export const getLatestPostsFromCategoryLast7DaysPaged = async (category: string, limit = 5, page = 1) => {
  try {
    const response = await client.collection('posts').find({
      filters: {
        category: {
          $eq: category
        },
        publishedAt: {
          $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
        }
      },
      sort: 'publishedAt:desc',
      pagination: {
        page,
        pageSize: limit
      },
      populate: '*'
    });
    return response.data
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    throw error;
  }
}



export const searchPosts = async (searchTerm: string) => {
  try {
    const response = await client.collection('posts').find({
      filters: {
        title: {
          $contains: searchTerm
        }
      },
      sort: 'publishedAt:desc',
      populate: '*'
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    throw error;
  }
}

export const getCategoriesFromLast3Days = async () => {
  try {
    const response = await client.collection('posts').find({
      filters: {
        publishedAt: {
          $gte: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
        }
      },
      sort: 'publishedAt:desc',
      pagination: {
        page: 1,
        pageSize: 5
      },
      populate: '*'
    });
    const categories = response.data.reduce((acc: any, post: any) => {
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