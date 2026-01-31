import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 py-4">
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/maple_leaf_icon.png"
            alt="Maple Leaf Logo"
            width={32}
            height={32}
          />
          <span className="font-bold text-xl text-primary">Pardons Are Us</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li>
            <Link
              href="/#how-it-works"
              className="hover:text-primary transition-colors"
            >
              How It Works
            </Link>
          </li>
          <li>
            <Link href="/#diy" className="hover:text-primary transition-colors">
              Do It Yourself
            </Link>
          </li>
          <li>
            <Link
              href="/#our-services"
              className="hover:text-primary transition-colors"
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link
              href="/#eligibility"
              className="hover:text-primary transition-colors"
            >
              Eligibility
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-primary-hover transition-colors"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
