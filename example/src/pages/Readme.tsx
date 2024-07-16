import Markdown from "react-markdown"

export { Readme }

const Readme = ({content}: {
  content: string
}) => {
  return (
    <div>
      <Markdown>
        {content}
      </Markdown>
    </div>
  )
}
