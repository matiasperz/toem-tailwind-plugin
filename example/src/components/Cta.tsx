import clsx from "clsx";

type CtaProps = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  suffix?: React.ReactNode;
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const spinner = (
  <svg
    className="w-em-[16/16]"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31 16C31 7.71739 24.2826 1 16 1C7.71739 1 1 7.71739 1 16M3.54348 16C3.54348 9.15217 9.08696 3.54348 16 3.54348C22.913 3.54348 28.4565 9.15217 28.4565 16"
      fill="currentColor"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="0.5s"
        from="0 16 16"
        to="360 16 16"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

export const Cta = ({ children, size = "medium", suffix, loading, className, ...rest }: CtaProps) => {
  return (
    <button
      className={clsx(
        "h-em-[44/16] hover:bg-[#0f0f0f] whitespace-nowrap duration-300 transition-colors ease-out max-w-max inline-flex items-center justify-center px-em-[24/16] rounded-em-[8/16] border border-zinc-900 bg-black",
        {
          "text-sm": size === "small",
          "text-base": size === "medium",
          "text-lg": size === "large",
        },
        className
      )}
      {...rest}
    >
      <span
        className={clsx("inline-flex items-center", {
          invisible: loading,
        })}
      >
        {children}

        {suffix && <span className="ml-em-[12/16]">{suffix}</span>}
      </span>
      <span
        className={clsx("absolute", {
          invisible: !loading,
        })}
      >
        {spinner}
      </span>
    </button>
  );
};
