import "../styles/globals.scss";
import { Providers } from "@/redux/provider";

export const metadata = {
  title: "CSS Semantics",
  description: "To help generate the css",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
