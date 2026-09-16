import "@fontsource-variable/inter";
import "./globals.css";

export const metadata = {
  title: { default: "TDM155AI · Week 2", template: "%s · TDM155AI" },
  description: "Week 2: tools of the AI trade. Notes, guides, and experiments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
