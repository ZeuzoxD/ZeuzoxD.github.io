import React from "react";
import {
  ProjectContentBlock,
  TextBlock,
  HeadingBlock,
  ImageBlock,
  CodeBlock,
  LinkBlock,
  ListBlock,
} from "@/data/type";

import {
  IconBrandGithub,
  IconExternalLink,
  IconCode,
  IconMail,
  IconArrowRight,
  IconBrandYoutube,
  IconFile,
} from "@tabler/icons-react";

interface ContentBlockRendererProps {
  blocks: ProjectContentBlock[];
}

interface IconRenderResult {
  icon: React.ReactNode;
  colorClass: string;
}

const getIconComponent = (iconName?: string): IconRenderResult => {
  switch (iconName) {
    case "github":
      return {
        icon: <IconBrandGithub size={24} stroke={2} color="#7453f5" />,
        colorClass: "text-[#7453f5]",
      };
    case "external-link":
      return {
        icon: <IconExternalLink size={24} stroke={2} color="#7453f5" />,
        colorClass: "text-[#7453f5]",
      };
    case "file-text":
      return {
        icon: <IconFile size={24} stroke={2} color="#f5b153" />,
        colorClass: "text-[#f5b153]",
      };
    case "code":
      return {
        icon: <IconCode size={24} stroke={2} color="#7453f5" />,
        colorClass: "text-[#7453f5]",
      };
    case "mail":
      return {
        icon: <IconMail size={24} stroke={2} color="#f55353" />,
        colorClass: "text-[#f55353]",
      };
    case "youtube":
      return {
        icon: <IconBrandYoutube size={24} stroke={2} color="#f55353" />,
        colorClass: "text-[#f55353]",
      };
    default:
      return {
        icon: <IconArrowRight size={24} stroke={2} />,
        colorClass: "text-gray-400 hover:text-gray-300",
      };
  }
};

const ContentBlockRenderer: React.FC<ContentBlockRendererProps> = ({
  blocks,
}) => {
  if (!blocks || blocks.length === 0) {
    return null;
  }

  return (
    <div className="space-y-8">
      {" "}
      {/* Overall spacing between different blocks */}
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            const headingBlock = block as HeadingBlock;
            const HeadingTag = `h${headingBlock.level}`;
            let textSize = "text-2xl"; // Default for h2
            if (headingBlock.level === 1) textSize = "text-3xl";
            else if (headingBlock.level === 3) textSize = "text-xl";
            else if (headingBlock.level === 4) textSize = "text-lg";
            else if (headingBlock.level >= 5) textSize = "text-base";

            return React.createElement(
              HeadingTag,
              {
                key: index,
                className: `${textSize} font-bold text-white ${
                  headingBlock.styles || ""
                }`,
              },
              headingBlock.content,
            );

          case "text":
            const textBlock = block as TextBlock;
            return (
              <p
                key={index}
                className={`tracking-wide text-medium ${
                  textBlock.styles || ""
                }`}
                dangerouslySetInnerHTML={{ __html: textBlock.content }} // Allows basic HTML like <strong>
              />
            );

          case "image":
            const imageBlock = block as ImageBlock;
            if (
              imageBlock.layout === "gallery" &&
              Array.isArray(imageBlock.src)
            ) {
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${
                    imageBlock.styles || ""
                  }`}
                >
                  {imageBlock.src.map((src, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="relative w-full h-48 sm:h-64 bg-gray-800 rounded-lg overflow-hidden"
                    >
                      <img
                        src={src}
                        alt={`${imageBlock.alt || "Project image"} ${
                          imgIdx + 1
                        }`}
                        className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                  {imageBlock.caption && (
                    <p className="text-sm text-gray-500 text-center col-span-full mt-2">
                      {imageBlock.caption}
                    </p>
                  )}
                </div>
              );
            }
            // Single image or default layout
            return (
              <div
                key={index}
                className={`space-y-2 ${imageBlock.styles || ""}`}
              >
                <div className="relative w-full md:h-full bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={imageBlock.src as string}
                    alt={imageBlock.alt || "Project image"}
                    className="max-w-full max-h-full object-contain rounded-lg" // Use max-w/h-full and object-contain
                  />
                </div>
                {imageBlock.caption && (
                  <p className="text-sm text-gray-500 text-center">
                    {imageBlock.caption}
                  </p>
                )}
              </div>
            );

          case "code":
            const codeBlock = block as CodeBlock;
            return (
              <div
                key={index}
                className={`bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto ${
                  codeBlock.styles || ""
                }`}
              >
                {codeBlock.fileName && (
                  <div className="text-gray-400 text-xs mb-2">
                    {codeBlock.fileName}
                  </div>
                )}
                <pre className="whitespace-pre-wrap break-words text-green-300">
                  <code>{codeBlock.code}</code>{" "}
                </pre>
              </div>
            );

          case "link":
            const linkBlock = block as LinkBlock;
            const { icon, colorClass } = getIconComponent(linkBlock.icon);
            return (
              <div key={index} style={{ display: "block" }}>
                <a
                  href={linkBlock.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-2  ${
                    linkBlock.styles || ""
                  }`}
                >
                  {icon}
                  <span
                    className={`${colorClass} transition-colors duration-200`}
                  >
                    {linkBlock.text}
                  </span>
                </a>
              </div>
            );

          case "list":
            const listBlock = block as ListBlock;
            const ListTag = listBlock.ordered ? "ol" : "ul";
            const listStyle = listBlock.ordered ? "list-decimal" : "list-disc";
            return (
              <ListTag
                key={index}
                className={`${listStyle} pl-5 font-medium ${
                  listBlock.styles || ""
                }`}
              >
                {listBlock.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="mb-1"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </ListTag>
            );

          default:
            return null; // Don't render unknown block types
        }
      })}
    </div>
  );
};

export default ContentBlockRenderer;
