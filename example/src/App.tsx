import './App.css'

const Quote = () => {
  return (
<>
{/* A tailwind quote component quoting steve jobs */}
<div className="flex flex-col items-start justify-center p-em-[24/16] mx-auto space-y-4 border max-w-max rounded-xl border-zinc-900">
        <div className="flex flex-col items-center space-y-em-[16/16] md:flex-row md:space-y-em-[0/1] md:space-x-em-[16/16]">
          <img
            src="https://dummyimage.com/64x64/fff/000"
            alt="Steve Jobs"
            width={64}
            height={64}
            className="w-em-[64/16] rounded-full"
          />
          <div>
            <blockquote className="text-em-[24/16] font-medium leading-tight">
              "The only way to do great work is to love what you do."
            </blockquote>
            <div className="flex items-center gap-x-em-[8/16]">
              <div className="font-medium">Steve Jobs</div>
              <div className="text-gray-500 dark:text-gray-400">
                Co-founder, Apple
              </div>
            </div>
          </div>
        </div>
      </div>
</>
  )
}

function App() {

  return (
    <div className='flex flex-col gap-y-6 leading-none'>
      <div className='text-xs space-y-4'>
        <p>Extra Small</p>
        <Quote />
      </div>
       <div className='text-sm space-y-4'>
        <p>Small</p>
        <Quote />
      </div>
      <div className='text-base space-y-4'>
        <p>Base</p>
        <Quote />
      </div>
      <div className='text-lg space-y-4'>
        <p>Large</p>
        <Quote />
      </div>
    </div>
  )
}

export default App
