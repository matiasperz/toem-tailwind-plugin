export { Head };

import og from '../../public/OG.jpg'

const metadata = {
  title: 'toem Tailwind Plugin',
  description: 'A Tailwind plugin for dynamically calculate em values.',
  image: og,
}

const Head = () => {
  return (
    <>
      <meta property="og:title" content={metadata.title} />
      <meta
        property="og:description"
        content={metadata.description}
      />
      <meta property="og:image" content={metadata.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta
        name="twitter:description"
        content={metadata.description}
      />
      <meta name="twitter:image" content={metadata.image} />
      <title>{metadata.title}</title>
    </>
  );
};
