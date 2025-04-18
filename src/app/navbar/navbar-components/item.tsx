import Image from "next/image";

export default function Item() {
    // const data : Item[] = [
    //     {
    //         id : 1,
    //         documentId : "",
    //         title : "title 1",
    //         content : ,
    //         createdAt : Date,
    //         updatedAt : Date,
    //         publishedAt : Date,
    //         Category : string,
    //         banner : string
    //     }
    // ]
    return (
        <div className="cursor-pointer flex flex-col gap-2 p-2">
            <Image
                className="rounded-sm"
                src='/protest.jpg'
                width={335}
                height={170}
                alt="article"
            />
            <p className="bg-black p-1 text-white w-fit text-sm">
                National
            </p>
            <section>
                <p className="word-wrap  text-sm">
                    this is a title .
                </p>
            </section>
        </div>
    )
}