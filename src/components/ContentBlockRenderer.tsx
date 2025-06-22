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
  glowClass: string;
}

const getIconComponent = (iconName?: string): IconRenderResult => {
  switch (iconName) {
    case "github":
      return {
        icon: (
          <IconBrandGithub
            size={24}
            stroke={2}
            color="#674fff"
            className="filter drop-shadow-lg"
          />
        ),
        colorClass: "text-[#674fff] hover:text-purple-200",
        glowClass: "hover:shadow-purple-400/60",
      };
    case "external-link":
      return {
        icon: (
          <IconExternalLink
            size={24}
            stroke={2}
            className="filter drop-shadow-lg"
          />
        ),
        colorClass: "text-cyan-300 hover:text-cyan-200",
        glowClass: "hover:shadow-cyan-400/60",
      };
    case "file-text":
      return {
        icon: (
          <IconFile
            size={24}
            stroke={2}
            color="#ff954f"
            className="filter drop-shadow-lg"
          />
        ),
        colorClass: "text-[#ff954f] hover:text-amber-200",
        glowClass: "hover:shadow-amber-400/60",
      };
    case "code":
      return {
        icon: (
          <IconCode size={24} stroke={2} className="filter drop-shadow-lg" />
        ),
        colorClass: "text-emerald-300 hover:text-emerald-200",
        glowClass: "hover:shadow-emerald-400/60",
      };
    case "mail":
      return {
        icon: (
          <IconMail size={24} stroke={2} className="filter drop-shadow-lg" />
        ),
        colorClass: "text-rose-300 hover:text-rose-200",
        glowClass: "hover:shadow-rose-400/60",
      };
    case "youtube":
      return {
        icon: (
          <IconBrandYoutube
            size={24}
            stroke={2}
            color="#ff4f4f"
            className="filter drop-shadow-lg"
          />
        ),
        colorClass: "text-[#ff4f4f] hover:text-red-200",
        glowClass: "hover:shadow-red-400/60",
      };
    default:
      return {
        icon: (
          <IconArrowRight
            size={24}
            stroke={2}
            className="filter drop-shadow-lg"
          />
        ),
        colorClass: "text-slate-300 hover:text-slate-200",
        glowClass: "hover:shadow-slate-400/60",
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
    <div className="space-y-10">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            const headingBlock = block as HeadingBlock;
            const HeadingTag = `h${headingBlock.level}`;
            let textSize = "text-2xl"; // Default for h2
            if (headingBlock.level === 1) textSize = "text-4xl";
            else if (headingBlock.level === 3) textSize = "text-xl";
            else if (headingBlock.level === 4) textSize = "text-lg";
            else if (headingBlock.level >= 5) textSize = "text-base";

            return React.createElement(
              HeadingTag,
              {
                key: index,
                className: `${textSize} font-bold text-white drop-shadow-2xl 
                           bg-gradient-to-r from-white via-purple-100 to-white 
                           bg-clip-text text-transparent leading-tight
                           ${headingBlock.styles || ""}`,
              },
              headingBlock.content,
            );

          case "text":
            const textBlock = block as TextBlock;
            return (
              <div key={index} className="relative group">
                <div
                  className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl rounded-2xl 
                               border border-white/10 opacity-60 group-hover:opacity-100 
                               transition-all duration-500 pointer-events-none"
                />

                <div
                  className="absolute inset-[1px] bg-gradient-to-br from-white/[0.06] 
                               via-white/[0.02] to-white/[0.04] rounded-2xl opacity-40 
                               group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                />

                <p
                  className={`relative z-10 p-6 text-gray-200 leading-relaxed tracking-wide 
                             font-medium drop-shadow-lg group-hover:text-white 
                             transition-colors duration-300 ${textBlock.styles || ""}`}
                  dangerouslySetInnerHTML={{ __html: textBlock.content }}
                />
              </div>
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
                  className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
                    imageBlock.styles || ""
                  }`}
                >
                  {imageBlock.src.map((src, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="relative group overflow-hidden rounded-3xl"
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-white/[0.08] 
                                     via-white/[0.02] to-white/[0.06] backdrop-blur-2xl 
                                     border-2 border-white/20 rounded-3xl z-10 pointer-events-none
                                     group-hover:border-white/40 transition-all duration-500"
                      />

                      {/* Glowing orbs */}
                      <div
                        className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r 
                                     from-purple-400/40 to-pink-400/40 rounded-full blur-2xl 
                                     group-hover:scale-150 transition-transform duration-700 opacity-60"
                      />
                      <div
                        className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r 
                                     from-cyan-400/40 to-blue-400/40 rounded-full blur-2xl 
                                     group-hover:scale-150 transition-transform duration-700 opacity-60"
                      />

                      <div
                        className="relative h-48 sm:h-64 bg-gray-900/50 backdrop-blur-sm rounded-3xl 
                                     overflow-hidden border border-white/10"
                      >
                        <img
                          src={src}
                          alt={`${imageBlock.alt || "Project image"} ${imgIdx + 1}`}
                          className="w-full h-full object-cover transition-all duration-500 
                                   group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                        />
                      </div>
                    </div>
                  ))}
                  {imageBlock.caption && (
                    <p
                      className="text-sm text-gray-400 text-center col-span-full mt-4 
                                 bg-white/[0.03] backdrop-blur-xl p-4 rounded-2xl border border-white/10"
                    >
                      {imageBlock.caption}
                    </p>
                  )}
                </div>
              );
            }

            // Single image with enhanced glassmorphic styling
            return (
              <div
                key={index}
                className={`relative group space-y-4 ${imageBlock.styles || ""}`}
              >
                {/* Animated gradient orbs */}
                <div
                  className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-r 
                               from-purple-400/50 to-pink-400/50 rounded-full blur-3xl 
                               group-hover:scale-125 transition-transform duration-1000 opacity-60 animate-pulse"
                />
                <div
                  className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-r 
                               from-cyan-400/50 to-blue-400/50 rounded-full blur-3xl 
                               group-hover:scale-125 transition-transform duration-1000 opacity-60 animate-pulse"
                  style={{ animationDelay: "1s" }}
                />

                <div
                  className="relative w-full bg-gray-900/30 backdrop-blur-sm rounded-3xl 
                               overflow-hidden border border-white/10 flex items-center justify-center
                               group-hover:bg-gray-900/50 transition-all duration-500"
                >
                  <img
                    src={imageBlock.src as string}
                    alt={imageBlock.alt || "Project image"}
                    className="max-w-full max-h-full object-contain rounded-3xl 
                             filter brightness-90 group-hover:brightness-100 
                             transition-all duration-500 group-hover:scale-105"
                  />
                </div>

                {imageBlock.caption && (
                  <p
                    className="text-sm text-gray-400 text-center bg-white/[0.03] 
                               backdrop-blur-xl p-4 rounded-2xl border border-white/10
                               drop-shadow-lg"
                  >
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
                className={`relative group overflow-hidden rounded-3xl ${
                  codeBlock.styles || ""
                }`}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-gray-900/80 
                               via-gray-800/60 to-gray-900/80 backdrop-blur-2xl 
                               border-2 border-white/20 rounded-3xl
                               group-hover:border-emerald-400/50 transition-all duration-500"
                />

                <div
                  className="absolute inset-[2px] bg-gradient-to-br from-emerald-500/5 
                               to-cyan-500/5 rounded-3xl opacity-60 group-hover:opacity-100 
                               transition-opacity duration-500"
                />

                <div
                  className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r 
                               from-emerald-400/30 to-cyan-400/30 rounded-full blur-2xl 
                               group-hover:scale-150 transition-transform duration-700 opacity-50"
                />

                <div className="relative z-10 p-6">
                  {codeBlock.fileName && (
                    <div
                      className="flex items-center gap-3 mb-4 p-3 bg-white/[0.05] 
                                   backdrop-blur-xl rounded-2xl border border-white/10"
                    >
                      <IconCode
                        size={18}
                        className="text-emerald-300 filter drop-shadow-lg"
                      />
                      <span className="text-gray-300 text-sm font-medium tracking-wide">
                        {codeBlock.fileName}
                      </span>
                    </div>
                  )}
                  <pre
                    className="font-mono text-sm overflow-x-auto scrollbar-thin 
                                 scrollbar-track-white/5 scrollbar-thumb-white/20"
                  >
                    <code className="text-emerald-300 drop-shadow-lg leading-relaxed">
                      {codeBlock.code}
                    </code>
                  </pre>
                </div>
              </div>
            );

          case "link":
            const linkBlock = block as LinkBlock;
            const { icon, colorClass, glowClass } = getIconComponent(
              linkBlock.icon,
            );
            return (
              <div key={index} className="relative group">
                <a
                  href={linkBlock.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-2 p-5 bg-white/[0.03] 
                             backdrop-blur-2xl rounded-2xl shadow-xl hover:shadow-md
                             hover:scale-105 hover:-translate-y-1 ${glowClass}
                             ${linkBlock.styles || ""}`}
                >
                  {icon}
                  <span
                    className={`font-semibold tracking-wide drop-shadow-lg 
                                   transition-all duration-300 ${colorClass}`}
                  >
                    {linkBlock.text}
                  </span>

                  <IconArrowRight
                    size={18}
                    className="text-white/60 group-hover:text-white/90 
                              group-hover:translate-x-1 transition-all duration-300"
                  />
                </a>

                <div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400/20 
                               to-cyan-400/20 rounded-2xl blur-xl opacity-0 
                               group-hover:opacity-100 transition-opacity duration-500 -z-10"
                />
              </div>
            );

          case "list":
            const listBlock = block as ListBlock;
            const ListTag = listBlock.ordered ? "ol" : "ul";
            const listStyle = listBlock.ordered ? "list-decimal" : "list-disc";
            return (
              <div key={index} className="relative group">
                <div
                  className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl rounded-3xl 
                               border-2 border-white/15 opacity-80 group-hover:opacity-100 
                               group-hover:border-white/30 transition-all duration-500"
                />

                <div
                  className="absolute inset-[2px] bg-gradient-to-br from-white/[0.04] 
                               via-transparent to-white/[0.02] rounded-3xl opacity-60 
                               group-hover:opacity-80 transition-opacity duration-500"
                />

                {/* Subtle animated orb */}
                <div
                  className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r 
                               from-purple-400/20 to-pink-400/20 rounded-full blur-xl 
                               opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                />

                <ListTag
                  className={`${listStyle} relative z-10 p-8 pl-12 space-y-3 
                             text-gray-200 font-medium leading-relaxed ${
                               listBlock.styles || ""
                             }`}
                >
                  {listBlock.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="relative group/item pl-2 transition-all duration-300 
                               hover:text-white hover:translate-x-2"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
                </ListTag>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default ContentBlockRenderer;
