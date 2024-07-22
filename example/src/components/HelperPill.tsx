import {
  ArrowTopRightIcon,
  ExitFullScreenIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

const iconClassName =
  "flex items-center justify-center border rounded-full size-8 border-white/10";
const linkClassName = "flex items-center gap-x-2 whitespace-nowrap";

export const Pill = ({
  viewport = false,
  githubUrl,
}: {
  viewport?: boolean;
  githubUrl: string;
}) => {
  return (
    <div className="absolute text-sm text-white bottom-6">
      <div className="flex items-center p-1 pr-3 bg-black border rounded-full gap-x-5 border-white/10 whitespace-nowrap">
        {viewport && (
          <div className={linkClassName}>
            <div className={iconClassName}>
              <ExitFullScreenIcon className="size-4" />
            </div>
            <span className="font-medium">HINT:</span> Scale the viewport
          </div>
        )}

        <a href={githubUrl} className={linkClassName}>
          <div className={iconClassName}>
            <GitHubLogoIcon className="size-4" />
          </div>
          See it on Github
          <ArrowTopRightIcon height="1em" width="1em" />
        </a>
      </div>
    </div>
  );
};
