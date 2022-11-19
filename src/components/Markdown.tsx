import type React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const Markdown: React.FC<{ data: string[] }> = (props) =>
  props.data.map((data, index) => (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ node, ...props }) => <p className="util-MarginBottom--16" {...props} />,
        img: ({ node, ...props }) => <img {...props} style={{ width: '100%' }} />,
      }}
      key={index}
    >
      {data}
    </ReactMarkdown>
  ));
