"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { useState } from "react";

interface LanguageFormProps {
  languages: string[];
  setLanguages: (languages: string[]) => void;
  error?: string | null;
  placeholder?: string | undefined;
}

export default function LanguageForm({
  languages,
  setLanguages,
  error,
  placeholder = "Enter...",
}: LanguageFormProps) {
  const [newLanguage, setNewLanguage] = useState("");
  const MAX_LANGUAGES = 5;

  // Function to add a new language
  const addLanguage = () => {
    if (languages.length >= MAX_LANGUAGES) {
      return;
    }

    if (newLanguage && !languages.includes(newLanguage.trim())) {
      setLanguages([...languages, newLanguage.trim()]);
      setNewLanguage("");
    }
  };

  // Handle Enter key to add a new language
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addLanguage();
    }
  };

  // Function to remove a language
  const removeLanguage = (language: string) => {
    setLanguages(languages.filter((lang) => lang !== language));
  };

  return (
    <div>
      <div className="flex items-center gap-2 px-2 rounded-md border border-primary bg-default-50">
        <div className="flex flex-wrap items-center gap-2">
          {languages.map((language, index) => (
            <div
              key={index}
              className="flex items-center space-x-1 bg-primary/20 px-3 py-1 rounded-full text-sm font-medium text-primary border border-gray-300"
            >
              <span>{language}</span>
              <X
                size={14}
                className="cursor-pointer hover:text-red-500 transition-colors"
                onClick={() => removeLanguage(language)}
              />
            </div>
          ))}
        </div>

        <Label className="sr-only" htmlFor="newLanguage">
          Add New Language
        </Label>
        <Input
          id="newLanguage"
          type="text"
          placeholder={placeholder}
          value={newLanguage}
          onChange={(e) => setNewLanguage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full flex-grow border-none bg-transparent px-2 py-1 text-sm"
        />
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
