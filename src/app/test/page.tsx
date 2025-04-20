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
                `/api/strapi/posts?filters[category][$eq]=${encodeURIComponent("Cultura y Ciencia")}&sort=publishedAt:desc&pagination[limit]=5&populate=*`,)
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