import { Fragment, useCallback, useMemo, useState } from "react";
import clsx from "clsx";
import {
  CopyIcon,
  CheckIcon,
  ReaderIcon,
  ChevronDownIcon,
} from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";

import "./App.css";
import s from "./Components.module.css";
import TailwindLogo from "../assets/tailwind.svg";
import { useData } from "vike-react/useData";
import { Readme } from "./Readme";

export { Page };

const command = {
  npm: "npm install toem-tailwind-plugin",
  pnpm: "pnpm install toem-tailwind-plugin",
  yarn: "yarn add toem-tailwind-plugin",
};

const pkgManagers = Object.keys(command) as ("npm" | "pnpm" | "yarn")[];

type Context = { readme: string };

function Page() {
  const ctx = useData<Context>();
  const [activeExample, setActiveExample] = useState("readme");
  const [pkgManager, setPkgManager] =
    useState<(typeof pkgManagers)[number]>("npm");
  const [isCopied, setIsCopied] = useState(0);

  const copyValue = useMemo(() => {
    return command[pkgManager];
  }, [pkgManager]);

  const onCopy = useCallback(() => {
    setIsCopied((c) => c + 1);
    void navigator.clipboard.writeText(copyValue);
    setTimeout(() => {
      setIsCopied((c) => c - 1);
    }, 1400);
  }, [copyValue]);

  return (
    <div className="grid min-h-screen w-full grid-cols-[max-content_auto]">
      <div className="sticky flex flex-col top-0 left-0 h-screen min-w-[350px] w-[20vw] border-r border-zinc-900">
        <div className="px-4 py-3 border-b border-zinc-900">
          <p className="text-lg font-medium">
            <span className="inline-flex items-center justify-center mr-2 border rounded-full bg-white/5 size-10 border-zinc-900">
              <img src={TailwindLogo} className="w-6" />
            </span>
            <code className="inline-block">to-em</code> plugin
          </p>
        </div>
        <ul className="flex flex-col px-4 py-3 gap-y-3">
          {[
            {
              key: "readme",
              icon: <ReaderIcon className="inline-block h-[1em]" />,
              label: "Introduction",
            },
            {
              key: "quotes",
              label: "Scalable quote",
            },
            {
              key: "viewport",
              label: "Fluid text",
            },
          ].map(({ key, label, icon }) => {
            return (
              <Fragment key={key}>
                <li>
                  <button
                    onClick={() => setActiveExample(key)}
                    className={clsx(s["sidebar-link"], {
                      [s["active"]]: key === activeExample,
                    })}
                  >
                    {icon} {label}
                  </button>
                </li>
                {key === "readme" ? (
                  <li className="pb-2 pl-2 mt-2 border-b border-zinc-900">
                    <span className="text-sm leading-none">EXAMPLES</span>
                  </li>
                ) : (
                  <></>
                )}
              </Fragment>
            );
          })}
        </ul>

        <div className="mt-auto text-sm border-t border-zinc-900">
          <div className="flex justify-between px-3 py-2">
            <Select.Root
              value={pkgManager}
              onValueChange={(v) => {
                setPkgManager(v as "npm" | "pnpm" | "yarn");
              }}
            >
              <Select.Trigger className="flex gap-x-em-[8/16] items-center border-white/5 bg-zinc-900 border px-em-[12/16] py-em-[4/16] rounded-em-[8/16]">
                <Select.Value asChild>
                  <span className="pointer-events-none text-left inline-block min-w-[4.5ch]">
                    {pkgManager}
                  </span>
                </Select.Value>
                <Select.Icon className="">
                  <ChevronDownIcon />
                </Select.Icon>
              </Select.Trigger>

              <Select.Portal>
                <Select.Content className="text-sm" position="popper">
                  <Select.Viewport
                    style={{
                      width: "var(--radix-popper-anchor-width)",
                    }}
                    className="my-2 rounded-em-[8/16] border border-white/5 bg-zinc-900"
                  >
                    {pkgManagers.map((manager) => (
                      <Select.Item
                        className="flex gap-x-em-[8/16] items-center justify-between px-em-[12/16] py-em-[4/16] transition-colors hover:bg-white/5 outline-none cursor-pointer"
                        key={manager}
                        value={manager}
                      >
                        <Select.ItemText>{manager}</Select.ItemText>
                        <Select.ItemIndicator>
                          <CheckIcon />
                        </Select.ItemIndicator>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>

            <button
              disabled={Boolean(isCopied)}
              onClick={onCopy}
              className={clsx(s["copy-button"], {
                [s["copy-button-copied"]]: isCopied,
              })}
            >
              <CopyIcon width={16} height={16} />
              <CheckIcon width={20} height={20} />
            </button>
          </div>

          <button
            disabled={Boolean(isCopied)}
            onClick={onCopy}
            className={clsx(
              "relative overflow-hidden inline-flex w-full px-4 py-3 border-t border-white/5 bg-zinc-900 items-bottom"
            )}
          >
            <div
              className={clsx(s["install-command-bg"], {
                [s["install-command-bg-copied"]]: isCopied,
              })}
            />
            <code className="inline-block">
              {">"} {command[pkgManager]}
            </code>
            <span className="h-em-[20/16] bg-current align-middle inline-block w-em-[10/16] animate-caret ml-em-[6/16]">
              {" "}
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-10 leading-none gridbg gap-y-6">
        {activeExample === "quotes" ? (
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
        ) : (
          <></>
        )}

        {activeExample === "viewport" ? (
          <div className={s["viewport"]}>
            <div className="text-em-[22/16] mx-auto max-w-em-[780/22] !space-y-em-[24/22]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        ) : (
          <></>
        )}

        {activeExample === "readme" ? <Readme content={ctx.readme} /> : <></>}
      </div>
    </div>
  );
}

const Quote = () => {
  return (
    <>
      {/* A tailwind quote component quoting steve jobs */}
      <div className="flex bg-black flex-col items-start justify-center p-em-[24/16] mx-auto space-y-4 border max-w-max rounded-xl border-zinc-900">
        <div className="flex flex-col items-center text-center xl:text-left space-y-em-[16/16] xl:flex-row xl:space-y-em-[0/1] xl:space-x-em-[16/16]">
          <img
            src="/steve-jobs.png"
            alt="Steve Jobs"
            width={120}
            height={120}
            className="w-em-[64/16] rounded-full"
          />
          <div>
            <blockquote className="text-em-[24/16] max-xl:max-w-[32ch] text-pretty font-medium leading-tight">
              "The only way to do great work is to love what you do."
            </blockquote>
            <p className="gap-x-em-[8/16] mt-em-[8/16]">
              <span className="font-medium">Steve Jobs</span>
              &nbsp;
              <span className="text-gray-500 dark:text-gray-400">
                Co-founder, Apple
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
