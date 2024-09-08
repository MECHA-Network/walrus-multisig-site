'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { HamBurgerIcon, InputCrossIcon } from '../icons';
import Link from 'next/link';

const LINKS = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "MY DASHBOARD",
    href: "/dashboard",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Terms of service",
    target: "_blank",
    href: "https://cdn4.avada.io/media/shopify/alsHn8L.jpg",
  },
  {
    title: "Privacy",
    target: "_blank",
    href: "https://www.termsfeed.com/public/uploads/2021/12/sample-privacy-policy-template-screenshot.jpg",
  },
];

const MenuWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      <HamBurgerIcon className="h-7 w-7 cursor-pointer md:h-auto md:w-auto" onClick={() => setIsOpen(!isOpen)} />
    </div>
  );
};

const Menu = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) => {
  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 top-0 z-[1001] flex h-screen w-screen flex-col items-center justify-center bg-black transition-all duration-500',
        !isOpen && '-top-[100lvh] ease-out'
      )}
    >
      <InputCrossIcon className="absolute right-10 top-10 cursor-pointer text-white" onClick={() => setIsOpen(false)} />
 
      <p
        className={cn(
          'mb-[28px] text-[60px] font-bold uppercase text-[#BE1A03] lg:mb-[52px]',
          'transition-all delay-300 duration-500'
        )}
      >
        Next App
      </p>
      <div
        className={cn(
          'flex flex-col items-center justify-center gap-[24px] text-white opacity-100 lg:gap-[32px]',
          'transition-all delay-500 duration-500',
          // isOpen && 'top-0 opacity-100',
        )}
      >
        {LINKS.map((link) => (
          <LinkItem
            key={link.title}
            href={link.href}
            title={link.title}
            target={link.target}
            onClick={() => setIsOpen(false)}
          />
        ))}
      </div>
    </div>
  );
};

const LinkItem = ({
  href,
  title,
  onClick,
  target,
}: {
  href: string;
  title: string;
  onClick?: () => void;
  target?: string;
}) => {
  return (
    <Link
      onClick={onClick}
      target={target}
      href={href}
      className={cn('text-[24px] font-bold uppercase tracking-[-1px] lg:text-[44px]')}
    >
      {title}
    </Link>
  );
};

export default MenuWrapper;
