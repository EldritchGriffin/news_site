export function styleText(string: string) {
    //cuts the string to 50 characters and truncates ... if too long
    if (string.length > 35) {
        return string.substring(0, 35) + "...";
    }
    return string;
}
