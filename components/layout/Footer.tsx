import Image from "next/image";
import Link from "next/link";

interface FooterLinkProps {
  href: string;
  label: string;
}

interface SocialIconProps {
  href: string;
  icon: "facebook" | "twitter" | "cookie" | "linkedin";
}


function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <Link href={href} className="text-base text-promptly-foreground hover:text-sky-blue transition-colors duration-300" aria-label={label}>
      {label}
    </Link>
  );
}

function SocialIcon({ href, icon }: SocialIconProps) {
  const icons: Record<string, JSX.Element> = {
    facebook: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
      </svg>
    ),
    twitter: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
      </svg>
    ),
    cookie: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="w-6 h-6"
        fill="currentColor"
      >
        <path d="M164.49,163.51a12,12,0,1,1-17,0A12,12,0,0,1,164.49,163.51Zm-81-8a12,12,0,1,0,17,0A12,12,0,0,0,83.51,155.51Zm9-39a12,12,0,1,0-17,0A12,12,0,0,0,92.49,116.49Zm48-1a12,12,0,1,0,0,17A12,12,0,0,0,140.49,115.51ZM232,128A104,104,0,1,1,128,24a8,8,0,0,1,8,8,40,40,0,0,0,40,40,8,8,0,0,1,8,8,40,40,0,0,0,40,40A8,8,0,0,1,232,128Zm-16.31,7.39A56.13,56.13,0,0,1,168.5,87.5a56.13,56.13,0,0,1-47.89-47.19,88,88,0,1,0,95.08,95.08Z"></path>
      </svg>
    ),
    linkedin: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        fill="currentColor"
      >
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
      </svg>
    ),
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-100 opacity-80 text-promptly-foreground hover:scale-110 transition-all duration-300"
      aria-label={`Follow us on ${
        icon.charAt(0).toUpperCase() + icon.slice(1)
      }`}
    >
      {icons[icon]}
    </a>
  );
}

const Footer = () => {
  return (
    <footer className="relative w-full bg-promptly-background overflow-hidden animate-in">
     
      <div className="text-black relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
        <div className="flex flex-col py-16 gap-12 lg:flex-row lg:justify-between">
          <div className="grid gap-7 justify-center items-center sm:grid-cols-2 lg:grid-cols-3 lg:items-start lg:gap-x-10 lg:gap-y-6 text-center lg:text-left">
            <FooterLink href="#" label="AI Coaching" />
            <FooterLink href="#" label="Development" />
            <FooterLink href="#" label="Our Work" />
            <FooterLink href="#" label="Team" />
            <FooterLink href="#" label="Contact Us" />
          </div>
          <div className="flex justify-center gap-7">
            <SocialIcon href="#" icon="twitter" />
            <SocialIcon href="#" icon="facebook" />
            <SocialIcon href="#" icon="linkedin" />
          </div>
        </div>
        <div className="pb-12">
          <div className="flex flex-col items-center gap-7 lg:flex-row border-t border-border-soft pt-8">
            <FooterLink href="#" label="Data Protection" />
            <FooterLink href="#" label="Legal Notices" />
            <SocialIcon href="#" icon="cookie" />
            <div className="lg:ml-auto text-promptly-foreground opacity-70 text-sm">
              © {new Date().getFullYear()} Promptly. All rights reserved.
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span 
          className="font-calSans absolute top-5 bottom-0 left-0 right-0 text-[12vw] lg:text-[15vw] text-center leading-none"
          style={{
            fontFamily: "var(--font-cal-sans), sans-serif",
            color: 'rgba(20, 65, 81, 0.25)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)',
            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.07))',
            backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.6))',
            padding: '0.1em',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
            letterSpacing: '-0.02em',
          }}
        >
          Promptly AI
        </span>
     
        <div className="absolute bottom-0 right-0 w-full h-full flex items-end justify-end">
          <div className="relative w-full lg:w-2/3 aspect-square transform top-250 rotate-190 ">
            <Image
              src="/logo/logo.png"
              alt="Watermark"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-contain opacity-20 contrast-125 brightness-90 mix-blend-multiply"
              priority={false}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;