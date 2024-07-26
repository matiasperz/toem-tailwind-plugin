import { FluidTextExample } from "../../../examples/FluidText";
import { Pill } from "../../../components/HelperPill";

export { Page };

const Page = () => {
  return (
    <>
      <FluidTextExample />
      <Pill
        githubUrl="https://github.com/matiasperz/toem-tailwind-plugin/blob/main/example/src/examples/FluidText.tsx"
        viewport
      />
    </>
  );
};
