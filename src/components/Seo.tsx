import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

type SeoProps = {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  children?: React.ReactNode;
};

const Seo = ({
  title,
  description,
  pathname = '/',
  image = '/images/pronsk-cover.jpg',
  imageAlt = 'Пронск и Пронский район',
  type = 'website',
  noindex = false,
  children,
}: SeoProps) => {
  const { site } = useStaticQuery(graphql`
    query SeoSiteMetadata {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);
  const { title: siteTitle, description: siteDescription, siteUrl } = site.siteMetadata;
  const metaTitle = title || siteTitle;
  const metaDescription = description || siteDescription;
  const canonicalUrl = new URL(pathname, siteUrl).toString();
  const socialImageUrl = new URL(image, siteUrl).toString();

  return (
    <>
      <html lang='ru' />
      <title>{metaTitle}</title>
      <meta name='description' content={metaDescription} />
      {noindex && <meta name='robots' content='noindex, nofollow' />}
      <link rel='canonical' href={canonicalUrl} />
      <meta property='og:site_name' content={siteTitle} />
      <meta property='og:locale' content='ru_RU' />
      <meta property='og:type' content={type} />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:title' content={metaTitle} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:image' content={socialImageUrl} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:image:alt' content={imageAlt} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={metaTitle} />
      <meta name='twitter:description' content={metaDescription} />
      <meta name='twitter:image' content={socialImageUrl} />
      {children}
    </>
  );
};

export default Seo;
