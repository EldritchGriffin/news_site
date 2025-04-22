import { getLatestPosts } from "../(handlers)/requestHandlers";
import { getLatestPostsFromCategory } from "../(handlers)/requestHandlers";
import axios from "axios";
import { getLatestPostsFromCategoryLast7Days } from "../(handlers)/requestHandlers";
import {setPublishedAtDateOne10DaysBehind} from "../(handlers)/requestHandlers";

export default async function TestPage() {
    const posts = await getLatestPostsFromCategoryLast7Days("Política");
    setPublishedAtDateOne10DaysBehind("atn1l4c1jddk14ozbitw7k79");
    console.log(posts);
    return (
    <div>
    </div>
    );
}