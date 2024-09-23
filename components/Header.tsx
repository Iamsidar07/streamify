import { UserIcon } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="border-b border-secondary p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Streamify</h1>
      <UserIcon />
    </div>
  );
};

export default Header;
