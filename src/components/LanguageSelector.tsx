
import React from 'react';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Language } from "lucide-react";

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'zh-CN', name: 'Chinese' },
  { code: 'ar', name: 'Arabic' },
  { code: 'ru', name: 'Russian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'hi', name: 'Hindi' },
];

const LanguageSelector = () => {
  const changeLanguage = (languageCode: string) => {
    if (window.google && window.google.translate) {
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (select) {
        select.value = languageCode;
        select.dispatchEvent(new Event('change'));
      }
    } else {
      console.error('Google Translate not loaded yet');
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full" aria-label="Select language">
          <Language className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-2">
        <div className="grid gap-1">
          <h4 className="font-medium text-sm mb-1 px-2">Select Language</h4>
          {languages.map((language) => (
            <Button
              key={language.code}
              variant="ghost"
              className="w-full justify-start text-sm"
              onClick={() => changeLanguage(language.code)}
            >
              {language.name}
            </Button>
          ))}
          <div className="mt-2 pt-2 border-t text-xs text-center text-muted-foreground">
            <a 
              href="https://widgetify.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Powered by Widgetify
            </a>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSelector;
