import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Cta } from "../components/Cta";

const suffix = (
  <ArrowRightIcon className="group-hover:translate-x-1/3 transition-transform ease-out duration-300 w-em-[16/16] h-em-[16/16]" />
);

const rowClasses = "flex items-center justify-center gap-x-6";

export const CTAsExample = () => {
  return (
    <div className="space-y-12">
      <div className={rowClasses}>
        <Cta size="small">Small CTA</Cta>
        <Cta size="medium">Medium CTA</Cta>
        <Cta size="large">Large CTA</Cta>
      </div>
      <div className={rowClasses}>
        <Cta size="small" loading>
          Small CTA
        </Cta>
        <Cta size="medium" loading>
          Medium CTA
        </Cta>
        <Cta size="large" loading>
          Large CTA
        </Cta>
      </div>
      <div className={rowClasses}>
        <Cta className="group" size="small" suffix={suffix}>
          Small
        </Cta>
        <Cta className="group" size="medium" suffix={suffix}>
          Medium
        </Cta>
        <Cta className="group" size="large" suffix={suffix}>
          Large
        </Cta>
      </div>
    </div>
  );
};
