import "./index.css";
import { Fragment, useCallback, useMemo, useState } from "react";
import clsx from "clsx";
import {
  CopyIcon,
  CheckIcon,
  ReaderIcon,
  ChevronDownIcon,
} from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
import * as Popover from "@radix-ui/react-popover";

import { usePageContext } from "vike-react/usePageContext";

import "./App.css";
import s from "./Page.module.css";

import TailwindLogo from "../../public/tailwind.svg";

export { Layout };

const command = {
  npm: "npm install toem-tailwind-plugin",
  pnpm: "pnpm install toem-tailwind-plugin",
  yarn: "yarn add toem-tailwind-plugin",
};

const pkgManagers = Object.keys(command) as ("npm" | "pnpm" | "yarn")[];

const Header = () => {
  return (
    <div className="px-4 py-3 border-b border-zinc-900">
      <p className="text-lg font-medium">
        <span className="inline-flex items-center justify-center mr-2 border rounded-full bg-white/5 size-10 border-zinc-900">
          <img src={TailwindLogo} className="w-6" />
        </span>
        <code className="inline-block">toem</code> plugin
      </p>
    </div>
  );
};

const Sidebar = ({ className, mobile = false }: { className?: string, mobile?: boolean }) => {
  const ctx = usePageContext();

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
    <div
      className={clsx(
        "sticky bg-black flex flex-col top-0 left-0 h-[calc(100dvh-64px)] lg:h-svh min-w-[350px] w-[20vw] border-r border-zinc-900",
        {
          "border-t": mobile
        },
        className
      )}
    >
      {!mobile && <Header />}
      <ul className="flex flex-col p-4 max-lg:py-5 gap-y-3">
        {[
          {
            key: "readme",
            icon: <ReaderIcon className="inline-block h-[1em]" />,
            label: "Introduction",
            href: "/",
          },
          {
            key: "ctas",
            label: "CTAs",
            href: "/examples/ctas",
          },
          {
            key: "quotes",
            label: "Scalable quote",
            href: "/examples/scalable-quotes",
          },
          {
            key: "fluid",
            label: "Fluid text",
            href: "/examples/fluid-text",
          },
          {
            key: "viewport",
            label: "Viewport content",
            href: "/examples/viewport-content",
          },
          {
            key: "scoped",
            label: "Scoped base",
            href: "/examples/scoped-base",
          },
        ].map(({ key, label, href, icon }) => {
          return (
            <Fragment key={key}>
              <li>
                <a
                  href={href}
                  className={clsx(s["sidebar-link"], {
                    [s["active"]]: ctx.urlPathname === href,
                  })}
                >
                  {icon} {label}
                </a>
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

      <div className="mt-auto text-sm border-t max-lg:hidden border-zinc-900">
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
          <code className="inline-block overflow-hidden whitespace-nowrap overflow-ellipsis">
            {">"} {command[pkgManager]}
          </code>
          <span className="h-em-[20/16] bg-current align-middle inline-block w-em-[10/16] animate-caret ml-em-[6/16]">
            {" "}
          </span>
        </button>
      </div>
    </div>
  );
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Popover.Root>
      <div className="sticky top-0 flex items-center w-full h-16 pr-4 bg-black border-b lg:hidden md:pr-8 border-zinc-900">
        <Popover.Trigger className="relative flex items-center justify-center h-full border-r group border-zinc-900 aspect-square">
          <div className="absolute w-4 h-px -translate-y-1 bg-white group-data-[state=open]:translate-y-0 group-data-[state=open]:rotate-45" />
          <div className="absolute w-4 h-px translate-y-1 bg-white group-data-[state=open]:translate-y-0 group-data-[state=open]:-rotate-45" />
        </Popover.Trigger>

        <Header />
      </div>

      <Popover.Portal>
        <Popover.Content className="w-full lg:hidden">
          <Sidebar mobile />
        </Popover.Content>
      </Popover.Portal>

      <div className="grid min-h-svh w-full grid-cols-1 lg:grid-cols-[max-content_auto]">
        <Sidebar className="max-lg:hidden" />
        <div className="flex flex-col items-center p-4 leading-none md:justify-center md:p-16 lg:p-10 xl:p-16 gridbg gap-y-6">
          {children}
        </div>
      </div>
    </Popover.Root>
  );
}
