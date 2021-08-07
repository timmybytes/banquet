interface MetaHeadProps {
  title?: string;
  og?: [
    {
      property: string;
      content: string;
    }
  ];
}

const HEAD_DATA = {
  title: "Main Course",
  description: "",
};

/* Example Open Graph meta tags

<meta property="og:site_name" content="Colby Fayock" />
<meta property=“og:title” content=“Anyone Can Map! Inspiration and an introduction to the world of mapping - Colby Fayock" />
<meta property="og:description" content="Chef Gusteau was a visionary who created food experiences for the world to enjoy. How can we take his lessons and apply them to the world of…" />
<meta property="og:url" content="https://www.colbyfayock.com/2020/03/anyone-can-map-inspiration-and-an-introduction-to-the-world-of-mapping/" />
<meta property="og:type" content="article" />
<meta property="article:publisher" content="https://www.colbyfayock.com" />
<meta property="article:section" content="Coding" />
<meta property="article:tag" content="Coding" />
<meta property="og:image" content="https://res.cloudinary.com/fay/image/upload/w_1280,h_640,c_fill,q_auto,f_auto/w_860,c_fit,co_rgb:232129,g_west,x_80,y_-60,l_text:Source%20Sans%20Pro_70_line_spacing_-10_semibold:Anyone%20Can%20Map!%20Inspiration%20and%20an%20introduction%20to%20the%20world%20of%20mapping/blog-social-card-1.1" />
<meta property="og:image:secure_url" content="https://res.cloudinary.com/fay/image/upload/w_1280,h_640,c_fill,q_auto,f_auto/w_860,c_fit,co_rgb:232129,g_west,x_80,y_-60,l_text:Source%20Sans%20Pro_70_line_spacing_-10_semibold:Anyone%20Can%20Map!%20Inspiration%20and%20an%20introduction%20to%20the%20world%20of%20mapping/blog-social-card-1.1" />
<meta property="og:image:width" content="1280" />
<meta property="og:image:height" content="640" />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:image" content="https://res.cloudinary.com/fay/image/upload/w_1280,h_640,c_fill,q_auto,f_auto/w_860,c_fit,co_rgb:232129,g_west,x_80,y_-60,l_text:Source%20Sans%20Pro_70_line_spacing_-10_semibold:Anyone%20Can%20Map!%20Inspiration%20and%20an%20introduction%20to%20the%20world%20of%20mapping/blog-social-card-1.1" />
<meta property="twitter:site" content="@colbyfayock" />
*/

// Add app-wide meta tags for _document.tsx head
export const MetaHead = ({ title, og }: MetaHeadProps) => (
  <>
    <meta name="title" content="timmybytes" key="meta-title" />
    <meta
      name="description"
      content="timmybytes is a portfolio and blog for Timothy Merritt | Developer, Designer, Writer, and Musician"
      key="description"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicons/apple-touch-icon.png"
      key="apple-touch-icon"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicons/favicon-32x32.png"
      key="favicon-32x32"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicons/favicon-16x16.png"
      key="favicon-16x16"
    />
    <link
      rel="mask-icon"
      href="/safari-pinned-tab.svg"
      color="#5bbad5"
      key="safari-pinned-tab"
    />
    <meta name="msapplication-TileColor" content="#da532c" key="ms-tile" />
    <meta name="theme-color" content="#ff90ad" key="theme-color" />
    <meta property="og:locale" content="en_US" key="og-locale" />
    <meta property="og:type" content="website" key="og-type" />
    <meta property="og:title" content="timmybytes" key="og-title" />
    <meta
      property="og:description"
      content="timmybytes is a portfolio and blog for Timothy Merritt | Developer, Designer, Writer, and Musician"
      key="og-description"
    />
    <meta property="og:url" content="https://timmybytes.com" key="og-url" />
    <meta
      property="og:image"
      content="https://raw.githubusercontent.com/timmybytes/timmybytes-blog/main/public/images/timmybytes-Plain-Business-OG-Card.png"
      key="og-img"
    />
    <meta property="og:image:type" content="image/png" key="og-img-type" />
    <meta
      property="og:image:alt"
      content="The timmybytes logo"
      key="og-img-alt"
    />
    <meta property="og:image:width" content="1200" key="og-img-width" />
    <meta property="og:image:height" content="647" key="og-img-height" />
    <meta
      property="twitter:card"
      content="summary_large_image"
      key="twitter-card"
    />
    <meta
      property="twitter:image"
      content="https://timmybytes.com/images/timmybytes-Plain-Business-OG-Card.png"
      key="twitter-img"
    />
    <meta
      property="twitter:creator"
      content="@timmybytes"
      key="twitter-creator"
    />
  </>
);
