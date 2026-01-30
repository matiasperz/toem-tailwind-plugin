import { Quote } from '../components/Quote';
import { Cta } from '../components/Cta';

import s from './Examples.module.css'
import { Share2Icon } from '@radix-ui/react-icons';

export const ScalableContentExample = () => {
  return (
    <div className={s["viewport"]}>
      <div className="formatted text-em-[22/16] mx-auto max-w-em-[780/22] !space-y-em-[24/22]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="text-em-[14/22] !my-em-[44/14] flex flex-col items-center">
          <Quote />

          <p className="mt-em-[24/22] opacity-50">
            This one works dinamically too with the same code! Wohoo{" "}
          </p>
        </div>

        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat duis aute irure. dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

        <div className='flex mt-em-[36/16] justify-center gap-x-em-[12/16]'>
          <Cta className='text-em-[12/16]' suffix="👍">Like</Cta>
          <Cta className='text-em-[12/16]' suffix="👎">Dislike</Cta>
          <Cta className='text-em-[12/16]' suffix={<Share2Icon className='size-em-[18/16]' />}>Share</Cta>
        </div>
      </div>
    </div>
  );
}