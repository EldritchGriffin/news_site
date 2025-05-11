

export const getAllPostsClient = async () => {
    try{
        const articles = await client.collection('posts').find({
            sort: 'publishedAt:asc'
        })
        return articles.data
    }
    catch (error)
    {
        console.error("Error fetching posts:", error);
        throw error;
    }
}