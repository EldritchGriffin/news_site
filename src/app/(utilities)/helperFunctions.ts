export function styleText(string: string) {
    //cuts the string to 50 characters and truncates ... if too long
    if (string.length > 20) {
        return string.substring(0, 20) + "...";
    }
    return string;
}
