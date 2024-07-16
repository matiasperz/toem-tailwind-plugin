import Markdown from "react-markdown"
import rehypeRaw from 'rehype-raw'

export { Readme }

const Readme = ({content}: {
  content: string
}) => {
  return (
    <div>
      <Markdown rehypePlugins={[rehypeRaw]}>
        {content}
      </Markdown>
    </div>
  )
}
