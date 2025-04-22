'use client';

import { useEffect, useState } from "react";
import { getLatestPosts } from "../(handlers)/requestHandlers";
import { getLatestPostsFromCategory } from "../(handlers)/requestHandlers";
import axios from "axios";

export default function TestPage() {
    const [posts, setPosts] = useState<any>([]);
    useEffect(() => {
        async function fetchPosts() {
            const latestPosts = await axios.get(
                `/api/strapi/posts`,
                {
                    params: {
                      'filters[category][$eq]': 'Deportes',
                      'sort': 'publishedAt:desc',
                      'pagination[page]': 2,
                      'pagination[pageSize]': 2,  // Changed from pagination[limit]
                      'populate': '*'
                    }})
            console.log(latestPosts.data);
            // setPosts(latestPosts);
        }
        fetchPosts();
    }
    , []);
    return (
        <div>
        </div>
    );
}