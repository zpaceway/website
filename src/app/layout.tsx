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
      className="sm:text-[14px] md:text-[16px] lg:text-[18px] xl[20px] 2xl:text-[22px]"
    >
      <head />
      <body>{children}</body>
    </html>
  );
}
