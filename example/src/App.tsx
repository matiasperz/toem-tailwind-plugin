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
      <div className="min-w-72 w-[20vw] border-r border-zinc-900">
        <div className="px-4 py-3 border-b border-zinc-900">
          <p className="text-lg font-medium">
            <span className="inline-flex items-center justify-center mr-2 border rounded-full bg-white/5 size-10 border-zinc-900">
              <img src={TailwindLogo} className="w-6" />
            </span>
            <pre className="inline-block">to-em</pre> plugin</p>
        </div>
        <ul className="flex flex-col px-4 py-3 gap-y-3">
          <li>
            <a className={s['sidebar-link']}>Scalable quote</a>
          </li>
          <li>
            <a className={clsx(s['sidebar-link'], s['active'])}>Card</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start p-10 leading-none gap-y-6">
        <div className="space-y-4 text-xs">
          <p>Extra Small</p>
          <Quote />
        </div>
        <div className="space-y-4 text-sm">
          <p>Small</p>
          <Quote />
        </div>
        <div className="space-y-4 text-base">
          <p>Base</p>
          <Quote />
        </div>
        <div className="space-y-4 text-lg">
          <p>Large</p>
          <Quote />
        </div>
      </div>
    </div>
  );
}

export default App;
