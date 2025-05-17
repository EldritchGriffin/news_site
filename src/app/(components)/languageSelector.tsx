// app/(components)/LanguageSelector.tsx
'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface LanguageSelectorProps {
  currentLang: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLang }) => {
  const router = useRouter();
  const pathname = usePathname();
  
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    
    // Update URL with language parameter
    const url = new URL(window.location.href);
    
    if (selectedLang === 'en') {
      // Remove lang parameter for English (default)
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', selectedLang);
    }
    
    // Navigate to new URL
    router.push(pathname + url.search);
  };
  
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="language-select" className="text-sm font-medium">
        Language:
      </label>
      <select
        id="language-select"
        value={currentLang}
        onChange={handleLanguageChange}
        className="border rounded px-3 py-1.5 text-sm"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="ar">العربية</option>
        {/* Add more languages based on LibreTranslate capabilities */}
      </select>
    </div>
  );
};

export default LanguageSelector;