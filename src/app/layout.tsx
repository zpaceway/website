/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import "./globals.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="text-[14px] xs:text-[16px] md:text-[18px] xl:text-[20px]"
    >
      <head />
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NJZTHVT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
