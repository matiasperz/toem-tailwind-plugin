import clsx from "clsx";

const proseImg = "prose-img:border prose-img:min-w-0 prose-img:bg-zinc-900 prose-img:border-white/5 prose-img:rounded-lg prose-img:max-w-[512px]" 
const proseBase = "prose prose-invert prose-zinc prose-blue";
const prosePre = "prose-pre:p-0 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/5"
const proseCode = "prose-code:after:content-[none] prose-code:before:content-[none]"
const proseHeadings = "prose-headings:font-semibold prose-headings:border-b prose-headings:border-zinc-900 prose-headings:pb-2";

export const proseClassName = clsx(
  proseImg,
  proseBase,
  proseCode,
  proseHeadings,
  prosePre
)
