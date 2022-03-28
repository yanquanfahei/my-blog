import { Node, visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";
import { VFileWithOutput } from "unified";

export interface Heading {
  depth: number;
  value: string;
  index: number;
  id: string;
}

export const headings = (root: Node) => {
  const headingList: Heading[] = [];
  // @ts-ignore
  visit(root, (node, index: number) => {
    if(node.type === 'heading') {
      headingList.push({
        // @ts-ignore
        depth: node.depth,
        value: toString(node, { includeImageAlt: false }),
        index,
        // @ts-ignore
        id: `heading-${node.depth}-${index}`
      });
    }
  });

  return headingList;
};

export default function remarkHeadings() {
  return (node: Node, file: VFileWithOutput<any>) => {
    file.data.headings = headings(node);
  };
}