import { ScalableContentExample } from "../ScalableContent";
import { Pill } from "../../components/HelperPill";

export default function ViewportContentPage() {
  return (
    <>
      <ScalableContentExample />
      <Pill
        githubUrl="https://github.com/matiasperz/toem-tailwind-plugin/blob/main/example/app/examples/ScalableContent.tsx"
        viewport
      />
    </>
  );
}
