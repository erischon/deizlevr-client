import "./globals.css";

export const metadata = {
  title: "The Deizlevr Project",
  description: "Blog application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
