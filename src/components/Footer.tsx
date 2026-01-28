import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 mt-20">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-3 text-white font-bold text-xl">
          <Image
            src="/maple_leaf_icon.png"
            alt="Maple Leaf Logo"
            width={32}
            height={32}
            className="brightness-0 invert"
          />
          <span>Pardons Are Us</span>
        </div>
        <p className="max-w-md">
          Helping Canadians navigate the record suspension process since 2026.
          Professional assistance when you need it most.
        </p>
        <p className="text-sm opacity-75">
          &copy; 2026 Pardons Are Us. All Rights Reserved. We are a private
          assistance service and not a government agency.
        </p>
      </div>
    </footer>
  );
}
