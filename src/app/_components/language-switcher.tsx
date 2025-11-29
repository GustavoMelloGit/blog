'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import { Languages } from 'lucide-react';

type Language = 'pt' | 'en';

const title: Record<Language, string> = {
  pt: 'Selecionar Idioma',
  en: 'Select Language',
};

/**
 * Componente para alternar entre idiomas (PT/EN).
 * Atualiza a URL com o parâmetro lang para filtragem server-side.
 */
export function LanguageSwitcher() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentLang = (searchParams.get('lang') || 'pt') as Language;

  const handleLanguageChange = (value: string): void => {
    const newLang = value as Language;
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', newLang);
    router.push(`/?${params.toString()}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon' aria-label={title[currentLang]}>
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-48'>
        <DropdownMenuLabel>{title[currentLang]}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          onValueChange={(value) => handleLanguageChange(value)}
          value={currentLang}
        >
          <DropdownMenuRadioItem value='en'>
            <span className='flex items-center gap-2'>
              <span>🇺🇸</span>
              <span>English</span>
            </span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='pt'>
            <span className='flex items-center gap-2'>
              <span>🇧🇷</span>
              <span>Português</span>
            </span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
