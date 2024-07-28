export { Head };

const Head = () => {
  return (
    <>
      <meta property="og:title" content="toem Tailwind Plugin" />
      <meta
        property="og:description"
        content="A Tailwind plugin for dynamically calculate em values."
      />
      <meta property="og:image" content="/OG.jpg" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="toem Tailwind Plugin" />
      <meta
        name="twitter:description"
        content="A Tailwind plugin for dynamically calculate em values."
      />
      <meta name="twitter:image" content="/OG.jpg" />
      <title>toem Tailwind Plugin</title>
    </>
  );
};
