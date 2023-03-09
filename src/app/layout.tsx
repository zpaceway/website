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
      <body>{children}</body>
    </html>
  );
}
