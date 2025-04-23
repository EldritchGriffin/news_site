export function styleText(string: string, limit : number) {
    //cuts the string to 50 characters and truncates ... if too long
    if (string.length > limit) {
        return string.substring(0, limit) + "...";
    }
    return string;
}
