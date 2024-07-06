import clsx from "clsx";
import "./App.css";
import s from './Components.module.css';

import TailwindLogo from './assets/tailwind.svg'

const Quote = () => {
  return (
    <>
      {/* A tailwind quote component quoting steve jobs */}
      <div className="flex flex-col items-start justify-center p-em-[24/16] mx-auto space-y-4 border max-w-max rounded-xl border-zinc-900">
        <div className="flex flex-col items-center space-y-em-[16/16] md:flex-row md:space-y-em-[0/1] md:space-x-em-[16/16]">
          <img
            src="https://dummyimage.com/120x120/fff/000"
            alt="Steve Jobs"
            width={120}
            height={120}
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
  );
};



function App() {
  return (
    <div className="grid min-h-screen w-full grid-cols-[max-content_auto]">
      <div className="sticky flex flex-col top-0 left-0 h-screen min-w-[345px] w-[20vw] border-r border-zinc-900">
        <div className="px-4 py-3 border-b border-zinc-900">
          <p className="text-lg font-medium">
            <span className="inline-flex items-center justify-center mr-2 border rounded-full bg-white/5 size-10 border-zinc-900">
              <img src={TailwindLogo} className="w-6" />
            </span>
            <code className="inline-block">to-em</code> plugin</p>
        </div>
        <ul className="flex flex-col px-4 py-3 gap-y-3">
          <li>
            <a className={s['sidebar-link']}>Scalable quote</a>
          </li>
          <li>
            <a className={clsx(s['sidebar-link'], s['active'])}>Viewport Dynamic</a>
          </li>
        </ul>

        <div className="px-4 py-3 mt-auto text-sm border-t border-zinc-900">
          <div className="flex justify-between pb-3">
            <select className="px-em-[12/16] py-em-[4/16] rounded-em-[8/16]" name="" id="">
              <option value="npm">npm</option>
              <option value="pnpm">pnpm</option>
              <option value="yarn">yarn</option>
            </select>

            <button className="inline-block px-em-[8/16] py-em-[4/16] rounded-em-[8/16] bg-zinc-900 text-white">
              Copy
            </button>
          </div>
          <button className="inline-flex w-full items-bottom">
            <code className="inline-block">
              {'>'} npm install toem-tailwind-plugin
            </code>
            <span className="h-em-[20/16] bg-current align-middle inline-block w-em-[10/16] animate-caret ml-em-[6/16]">{' '}</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col p-10 leading-none gap-y-6">
        <div>
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
        
        <div className={s['viewport']}>
          <div className="text-em-[22/16] mx-auto max-w-em-[780/22] !space-y-em-[24/22]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
