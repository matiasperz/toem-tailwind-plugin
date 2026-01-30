import { Quote } from '../components/Quote';
import { Cta } from '../components/Cta';

import s from './Examples.module.css'
import { Share2Icon } from '@radix-ui/react-icons';

export const ScopedBaseScalableContentExample = () => {
  return (
    <div className={s["viewport"]}>
      <div className="formatted text-em-[22/16] mx-auto max-w-em-[780] !space-y-em-[24]">
        <p>
          If you want to use the same exact <b>base</b> value on large chunks of content, or if you want to make
          a whole block interoperable with multiple bases. You can use single value <code>-em</code>
          {' '} classes for that. It results on a <code>calc()</code> function that inherits the <b>base</b> value
          from it's root and defaults to your <b>base</b> value <code>defaultBase</code> on your plugin config.
        </p>

        <div className="text-em-[14/22] !my-em-[44] flex flex-col items-center paragraph">
          <Quote />

          <p className="mt-em-[24] opacity-50">
            This one works dinamically too with the same code! Wohoo{" "}
          </p>
        </div>

        <div className='flex mt-em-[36] justify-center gap-x-em-[12]'>
          <Cta className='text-em-[16]' suffix="👍">Like</Cta>
          <Cta className='text-em-[16]' suffix="👎">Dislike</Cta>
          <Cta className='text-em-[16]' suffix={<Share2Icon className='size-em-[18]' />}>Share</Cta>
        </div>
      </div>
    </div>
  );
}