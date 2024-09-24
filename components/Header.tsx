import { UserIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-secondary w-full">
      <nav className="p-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Streamify</h2>
        <UserIcon />
      </nav>
    </header>
  );
};

export default Header;
