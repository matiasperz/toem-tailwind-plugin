
import { useData } from "vike-react/useData";

import { Readme } from "./Readme";

type Context = { readme: string };

export { Page };

function Page() {
  const ctx = useData<Context>();

  return <Readme content={ctx.readme} />
}
