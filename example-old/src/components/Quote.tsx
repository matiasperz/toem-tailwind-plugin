export const Quote = () => {
  return (
    <div className="flex bg-black flex-col items-start justify-center p-em-[24/16] mx-auto space-y-4 border max-w-max rounded-xl border-zinc-900">
      <div className="flex flex-col items-center text-center xl:text-left space-y-em-[16/16] xl:flex-row xl:space-y-em-[0/1] xl:space-x-em-[16/16]">
        <img
          src="/steve-jobs.png"
          alt="Steve Jobs"
          width={120}
          height={120}
          className="w-em-[64/16] rounded-full"
        />
        <div>
          <blockquote className="text-em-[24/16] max-xl:max-w-[32ch] text-pretty font-medium leading-tight">
            "The only way to do great work is to love what you do."
          </blockquote>
          <p className="gap-x-em-[8/16] mt-em-[8/16]">
            <span className="font-medium">Steve Jobs</span>
            &nbsp;
            <span className="text-gray-500 dark:text-gray-400">
              Co-founder, Apple
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};