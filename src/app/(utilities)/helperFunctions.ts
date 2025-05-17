import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { visit } from 'unist-util-visit';
import { Node } from 'unist';

export function styleText(string: string, limit = 30) {
  //cuts the string to 50 characters and truncates ... if too long
  if (string.length > limit) {
    return string.substring(0, limit) + "...";
  }
  return string;
}

export const formatDate = (dateString: string) => {
   const date = new Date(dateString);
   return date.toLocaleDateString('en-US', {
     month: 'short', 
     day: 'numeric', 
     year: 'numeric',
   });
 };
