import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import Insta from "@/assets/social-instagram.svg";
import Youtube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return;
  <footer className="py-5 border-t border-white/15">
    <div className="container">
      <div className="flex flex=col">
        <div className="flex gap-2 items-center">
          <Logo />
          <div>AI Startup Landing Page</div>
        </div>
        <div>
          <nav>
            <a href="#">Features</a>
            <a href="#">Developers</a>
            <a href="#">Company</a>
            <a href="#">Blog</a>
            <a href="#">Changelog</a>
          </nav>
        </div>
        <div>
          <XSocial />
          <Insta />
          <Youtube />
        </div>
      </div>
    </div>
  </footer>;
};
