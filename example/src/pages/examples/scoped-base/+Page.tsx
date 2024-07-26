import { ScopedBaseScalableContentExample } from "../../../examples/ScopedBaseContent";
import { Pill } from "../../../components/HelperPill";

export { Page };

const Page = () => {
  return (
    <>
      <ScopedBaseScalableContentExample />
      <Pill githubUrl="https://github.com/matiasperz/toem-tailwind-plugin/blob/main/example/src/examples/ScopedBaseContent.tsx" />
    </>
  );
};
