import { ScalableQuoteExample } from "../../../examples/ScalableQuote";
import { Pill } from "../../../components/HelperPill";

export { Page };

const Page = () => {
  return (
    <>
      <ScalableQuoteExample />
      <Pill githubUrl="https://github.com/matiasperz/toem-tailwind-plugin/blob/main/example/src/examples/ScalableQuote.tsx" />
    </>
  );
};
