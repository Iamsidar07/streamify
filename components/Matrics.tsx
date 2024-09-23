import {
  BadgeCheckIcon,
  DollarSignIcon,
  HandCoinsIcon,
  MusicIcon,
  User,
  Users,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const Matrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-row-2 gap-6">
      <div className="p-4 sm:p-8 border-[1px] border-secondary sm:rounded-2xl bg-muted">
        <div className="space-y-2">
          <p className="text-secondary text-sm uppercase">Total users</p>
          <h3 className="text-lg font-bold sm:text-5xl">450K</h3>
        </div>
      </div>
      <div className="p-4 sm:p-8 border-[1px] border-secondary sm:rounded-2xl bg-muted">
        <div className="space-y-2">
          <p className="text-secondary text-sm uppercase">Active users</p>
          <h3 className="text-lg font-bold sm:text-5xl">450K</h3>
        </div>
      </div>

      <div className="md:row-span-2 flex flex-col p-4 border-[1px] border-secondary sm:rounded-2xl bg-muted">
        <p className="text-secondary  text-sm uppercase">top artists</p>
        <div className="mt-4 flex flex-col gap-1">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-2 cursor-pointer hover:bg-secondary p-1 rounded"
            >
              <div className="w-12 h-12 overflow-hidden rounded-full relative aspect-square">
                <Image
                  src="/a.jpeg"
                  alt="i"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <span className="text-sm">A.R Rehman</span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 sm:p-8 border-[1px] border-secondary sm:rounded-2xl bg-muted">
        <div className="space-y-2">
          <p className="text-secondary text-sm uppercase">Total revenue</p>
          <h3 className="text-lg font-bold sm:text-5xl">
            <span className="text-neutral-500 ">$ </span>450K
          </h3>
        </div>
      </div>
      <div className="p-4 sm:p-8 border-[1px] border-secondary sm:rounded-2xl bg-muted">
        <div className="space-y-2">
          <p className="text-neutral-500 text-sm uppercase">Total streams</p>
          <h3 className="text-lg font-bold sm:text-5xl">450K</h3>
        </div>
      </div>
    </div>
  );
};

export default Matrics;
