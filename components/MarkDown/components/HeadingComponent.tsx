import React from "react";
import { HeadingComponent } from "react-markdown/lib/ast-to-react";

const claSize: Record<number, string> = {
  1: 'text-3xl',
  2: 'text-2xl',
  3: 'text-xl',
  4: 'text-base',
  5: '',
  6: ''
}

const HeadingComponent: HeadingComponent = ({ index, children, level }) => {
  return React.createElement(
    `h${level}`,
    {
      id: `heading-${level}-${index}`,
      className: `${claSize[level]} font-bold my-4`
    },
    children
  );
};

export default HeadingComponent;
