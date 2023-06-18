import Header from "@/components/client/Header";
import "@/app/scss/client/globals.scss";
import Footer from "@/components/client/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="bodyTop">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}