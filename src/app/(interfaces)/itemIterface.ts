
interface Banner {
    id : number,
    url : string,
    alternativeText : string,
    caption : string,
    width : number,
    height : number
}

interface Item {
    id : number,
    documentId : string,
    title : string,
    content : string,
    createdAt : Date,
    updatedAt : Date,
    publishedAt : Date,
    category : string,
    banner : Banner
}
