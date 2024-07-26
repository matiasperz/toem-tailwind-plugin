import s from "./Examples.module.css";

export const FluidTextExample = () => {
  return (
    <div className={s["viewport"]}>
      <div className="formatted text-em-[22/16] mx-auto max-w-em-[780/22] !space-y-em-[24/22]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat duis aute irure. dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
          enim ipsam voluptatem quia voluptas sit aspernatur.
        </p>
        <p>
          Aut odit aut fugit, sed quia consequuntur magni dolores eos qui
          ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
          sedquia non numquam eius modi tempora incidunt ut labore et dolore
          magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
          aliquid ex ea commodi consequatur? Quis autem vel eum iure
          reprehenderit qui in ea voluptate velit esse quam nihil molestiae
          consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
          pariatur?
        </p>
      </div>
    </div>
  );
};
