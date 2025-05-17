import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { visit } from 'unist-util-visit';
import { Node } from 'unist';

export function styleText(string: string, limit : number) {
    //cuts the string to 50 characters and truncates ... if too long
    if (string.length > limit) {
        return string.substring(0, limit) + "...";
    }
    return string;
}

interface TextNode extends Node {
  type: 'text';
  value: string;
  parent?: any;
}

// A more reliable approach that doesn't depend on delimiter preservation
export async function translateMarkdown(
  markdown: string,
  translateFn: (text: string) => Promise<string>
): Promise<string> {
  try {
    // Parse markdown to AST
    const processor = unified().use(remarkParse);
    const tree = processor.parse(markdown);
    
    // Extract all text nodes that should be translated
    const textNodes: TextNode[] = [];
    
    visit(tree, 'text', (node: any) => {
      // Skip nodes in code blocks or inline code
      const isInCode = isNodeInCode(node);
      if (!isInCode && node.value && node.value.trim()) {
        textNodes.push(node);
      }
    });
    
    // Translate each node individually
    // This is more reliable than batch translation with delimiters
    for (const node of textNodes) {
      // Only send non-empty strings for translation
      if (node.value && node.value.trim()) {
        const translated = await translateFn(node.value);
        node.value = translated;
      }
    }
    
    // Convert back to markdown - use a more compatible configuration
    const result = unified()
      .use(remarkStringify, {
        // Set strong emphasis to be consistent with what the parser expects
        emphasis: '_',
        strong: '*',
        bullet: '-',
        listItemIndent: 'one'
      })
      .stringify(tree);
    
    return result;
  } catch (error) {
    console.error('Error translating markdown:', error);
    // Return original on error
    return markdown;
  }
}

// Check if a node is inside a code block
function isNodeInCode(node: TextNode): boolean {
  let parent = node.parent;
  while (parent) {
    if (parent.type === 'code' || parent.type === 'inlineCode') {
      return true;
    }
    parent = parent.parent;
  }
  return false;
}
