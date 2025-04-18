
export default function Item(props : {title: string, content: string, banner: string, Category: string}) {
    return (
        <div className="cursor-pointer flex flex-col gap-2 p-2">
            <img
                className="rounded-sm"
                src={props.banner}
                alt={props.title}
                width="400px"
            />
            <p className="bg-black p-1 text-white w-fit text-sm">
                {props.Category}
            </p>
            <section>
                <p className="word-wrap  text-sm">
                    {props.title}
                </p>
            </section>
        </div>
    )
}