
// Google Translate Type Definitions
declare namespace google {
  namespace translate {
    class TranslateElement {
      constructor(options: TranslateElementOptions, element: string);
    }

    interface TranslateElementOptions {
      pageLanguage: string;
      includedLanguages?: string;
      layout?: string;
      autoDisplay?: boolean;
      gaTrack?: boolean;
      gaId?: string;
    }
  }
}
