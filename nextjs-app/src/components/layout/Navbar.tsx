import { cn } from '@/lib/utils';

import Image from "next/image";
import MenuWrapper from './MenuWrapper';

const Navbar = ({ className }: { className?: string }) => {
  return (
    <nav
      id="nav"
      className={cn(
        "relative flex h-[var(--navbar-height)] items-center justify-between px-4 pb-4 pt-5 720px:px-[32px] 720px:pt-8 mx-11",
        className,
      )}
    >
      {/* <NetworkSwitch /> */}
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
      
      <MenuWrapper />
    </nav>
  );
};

export default Navbar;
