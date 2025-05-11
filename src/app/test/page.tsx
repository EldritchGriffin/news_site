import { getAllPostsClient } from "../(handlers)/strapiApiHandlers";
export default async function TestPage() {
    try {
        const posts = await getAllPostsClient();
        console.log(posts);
    } catch (error) {
    }
    return (
        <div>
        </div>
    );
}