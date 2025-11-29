'use client';

import { useRouter, useSearchParams } from 'next/navigation';

type Language = 'pt' | 'en';

/**
 * Componente para alternar entre idiomas (PT/EN).
 * Atualiza a URL com o parâmetro lang para filtragem server-side.
 */
export function LanguageSwitcher() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentLang = (searchParams.get('lang') || 'pt') as Language;

  const handleLanguageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const newLang = e.target.value as Language;
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', newLang);
    router.push(`/?${params.toString()}`);
  };

  return (
    <select
      value={currentLang}
      onChange={handleLanguageChange}
      className='px-3 py-1.5 text-sm font-medium bg-background border border-foreground/20 rounded-md cursor-pointer hover:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-colors'
      aria-label='Selecionar idioma'
    >
      <option value='pt'>PT</option>
      <option value='en'>EN</option>
    </select>
  );
}
