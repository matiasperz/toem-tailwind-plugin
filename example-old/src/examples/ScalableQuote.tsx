import { Quote } from "../components/Quote"

export const ScalableQuoteExample = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="mx-auto space-y-4 text-xs max-w-max">
        <p className="px-em-[16/16]">Extra Small</p>
        <Quote />
      </div>
      <div className="mx-auto space-y-4 text-sm max-w-max">
        <p className="px-em-[16/16]">Small</p>
        <Quote />
      </div>
      <div className="mx-auto space-y-4 text-base max-w-max">
        <p className="px-em-[16/16]">Base</p>
        <Quote />
      </div>
      <div className="mx-auto space-y-4 text-lg max-w-max">
        <p className="px-em-[16/16]">Large</p>
        <Quote />
      </div>
    </div>
  )
}