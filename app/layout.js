import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "NeuroVR - Build the Future of Learning in VR";
const siteDescription =
  "Create interactive classrooms, simulations, and learning worlds in virtual reality with NeuroVR. VR software for immersive learning, collaboration, and analytics.";
const siteUrl = "https://whab.space";
const author = "Wahb Amir";
const image = "https://whab.space/og-image.png";

export const metadata = {
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NeuroVR",
    url: siteUrl,
    author: {
      "@type": "Person",
      name: author,
      url: "https://github.com/wahb-amir",
    },
    description: siteDescription,
    publisher: {
      "@type": "Organization",
      name: "NeuroVR",
      logo: {
        "@type": "ImageObject",
        url: image,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <Head>
        <link rel="preload" href="/coding.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/vr.mp4" as="video" type="video/mp4" />

        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="author" content={author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:creator" content="@wahb_amir" />
        <link rel="canonical" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-fit w-full m-0 p-0 bg-gradient-to-t from-gray-900 via-gray-900 to-gray-800">
          <Navbar />
          <hr className=" text-gray-500"/>
        </div>

        {/* <Background /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
