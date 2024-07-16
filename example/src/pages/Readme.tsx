import Markdown from "react-markdown"
import rehypeRaw from 'rehype-raw'
import { ReaderIcon } from '@radix-ui/react-icons'
import clsx from "clsx"

export { Readme }

const proseBase = 'prose prose-invert prose-zinc prose-blue'
const proseCode= 'prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/5'
const proseHeadings = 'prose-headings:font-semibold'

const Readme = ({content}: {
  content: string
}) => {
  return (
    <div className="flex flex-col w-full h-full border rounded-xl border-zinc-900">
      <header className="border-b border-zinc-900">
        <div className="inline-block px-4 py-3 border-r border-zinc-900">
          <h1 className="text-sm font-medium flex items-center gap-x-em-[8/16]">
            <ReaderIcon /> <span>README.md</span>
          </h1>
        </div>
      </header>
      <div className={clsx("w-full px-12 py-16 !max-w-none", proseBase, proseCode, proseHeadings)}>
        <Markdown rehypePlugins={[rehypeRaw]}>
          {content}
        </Markdown>
      </div>
      <footer className="px-4 py-3 mt-auto text-sm border-t border-zinc-900">
        Made with <span className="inline-block text-[red] animate-heartbeat">❤️</span> by <a target="_blank" rel="noopener" href="https://matiasperez.dev">matiasperz</a>
      </footer>
    </div>
  )
}
