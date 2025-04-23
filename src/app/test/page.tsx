import { getCategoriesFromLast3Days, getLatestPosts } from "../(handlers)/requestHandlers";
import { getLatestPostsFromCategory } from "../(handlers)/requestHandlers";
import axios from "axios";
import { getLatestPostsFromCategoryLast7Days } from "../(handlers)/requestHandlers";

export default async function TestPage() {
    const cats = await getCategoriesFromLast3Days();
    console.log(cats); 
    return (
        <div>
        </div>
    );
}