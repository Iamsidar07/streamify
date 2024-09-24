import Image from "next/image";

const Header = () => {
  return (
    <header className="border-b border-secondary w-full">
      <nav className="p-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-geist-mono)]">
          Streamify
        </h2>
        <Image
          src="/a.jpeg"
          alt="Avatar"
          width={30}
          height={30}
          className="object-cover aspect-square rounded-full"
        />
      </nav>
    </header>
  );
};

export default Header;
