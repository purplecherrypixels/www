import FooterNavItem from "./FooterNavItem";

function Footer() {
  return (
    <footer className="w-full">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <FooterNavItem href="#" title="Kontakt" />
          <FooterNavItem href="/impressum" title="Impressum" />
        </nav>
        <p className="mt-8 text-base leading-6 text-center text-gray-500">
          &copy; {new Date().getFullYear()} purple cherry pixels
        </p>
      </div>
    </footer>
  );
}

export default Footer;
