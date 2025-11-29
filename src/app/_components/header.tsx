'use client';

import Link from 'next/link';
import { LanguageSwitcher } from './language-switcher';
import { ThemeSwitcher } from './theme-switcher';

const Header = () => {
  return (
    <div className='mb-20 mt-8 flex items-center justify-between'>
      <div className='flex items-start md:items-end flex-col md:flex-row md:gap-2'>
        <h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight'>
          <Link href='/' className='hover:underline'>
            Blog
          </Link>
          .
        </h2>
        <h4 className='text-md leading-9 italic text-foreground/90'>
          thoughts and learnings.
        </h4>
      </div>
      <div className='flex items-center gap-4'>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
