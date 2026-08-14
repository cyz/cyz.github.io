import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p className="footer-copy">© {year} Cynthia Zanoni</p>
      <SocialLinks />
    </footer>
  );
}
