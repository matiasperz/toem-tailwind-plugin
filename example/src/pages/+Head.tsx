import { metadata } from "../lib/constants";

export { Head };

const Head = () => {
  return (
    <>
      <link rel="icon" href={metadata.favicon} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={metadata.image} />
      <title>{metadata.title}</title>
      <meta property="description" content={metadata.description} />
    </>
  );
};
