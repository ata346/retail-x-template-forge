import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const themes = [
  { value: 'default', label: 'Default', preview: 'bg-gradient-to-r from-purple-900 to-pink-600' },
  { value: 'sketch', label: 'Sketch', preview: 'bg-gray-200 border-2 border-black' },
  { value: 'colorful', label: 'Colorful', preview: 'bg-gradient-to-r from-purple-300 via-red-400 to-green-300' },
  { value: 'dark-neon', label: 'Dark Neon', preview: 'bg-gradient-to-r from-black via-green-400 to-cyan-400' },
];

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Palette className="h-4 w-4 mr-2" />
          Theme
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((themeOption) => (
          <DropdownMenuItem
            key={themeOption.value}
            onClick={() => setTheme(themeOption.value)}
            className="flex items-center gap-2"
          >
            <div className={`w-4 h-4 rounded-full ${themeOption.preview}`} />
            {themeOption.label}
            {theme === themeOption.value && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}