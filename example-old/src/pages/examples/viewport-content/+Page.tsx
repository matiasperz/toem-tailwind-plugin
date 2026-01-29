import { ScalableContentExample } from "../../../examples/ScalableContent";
import { Pill } from "../../../components/HelperPill";

export { Page };

const Page = () => {
  return (
    <>
      <ScalableContentExample />
      <Pill
        githubUrl="https://github.com/matiasperz/toem-tailwind-plugin/blob/main/example/src/examples/ScalableContent.tsx"
        viewport
      />
    </>
  );
};
