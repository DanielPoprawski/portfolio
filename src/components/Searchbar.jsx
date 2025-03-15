// SearchBar.jsx
import React, { useState } from "react";
import { Search, X } from "lucide-react";

export default function SearchBar() {
      const [query, setQuery] = useState("");
      const [suggestions, setSuggestions] = useState([]);
      const [isFocused, setIsFocused] = useState(false);

      // Simulated search suggestions
      const dummySuggestions = [
            "React tutorials",
            "React components",
            "React hooks examples",
            "React router documentation",
            "React state management",
            "React performance optimization",
      ];

      const handleQueryChange = (e) => {
            const value = e.target.value;
            setQuery(value);

            if (value.trim() === "") {
                  setSuggestions([]);
                  return;
            }

            // Filter suggestions based on input
            const filtered = dummySuggestions.filter((item) => item.toLowerCase().includes(value.toLowerCase()));
            setSuggestions(filtered);
      };

      const clearSearch = () => {
            setQuery("");
            setSuggestions([]);
      };

      const selectSuggestion = (suggestion) => {
            setQuery(suggestion);
            setSuggestions([]);
      };

      return (
            <div className="w-full max-w-md">
                  <div className="bg-gray-100 rounded-lg p-6 shadow-lg text-black">
                        <h2 className="text-2xl font-bold mb-4">Search Component</h2>

                        <div className="relative">
                              <div className="flex items-center border border-gray-300 bg-white rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                                    <div className="pl-3 text-gray-400">
                                          <Search size={20} />
                                    </div>
                                    <input
                                          type="text"
                                          className="w-full py-3 px-2 focus:outline-none"
                                          placeholder="Search for something..."
                                          value={query}
                                          onChange={handleQueryChange}
                                          onFocus={() => setIsFocused(true)}
                                          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                                    />
                                    {query && (
                                          <button
                                                className="pr-3 text-gray-400 hover:text-gray-600"
                                                onClick={clearSearch}
                                          >
                                                <X size={20} />
                                          </button>
                                    )}
                              </div>

                              {isFocused && suggestions.length > 0 && (
                                    <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                          <ul>
                                                {suggestions.map((suggestion, index) => (
                                                      <li
                                                            key={index}
                                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                                            onClick={() => selectSuggestion(suggestion)}
                                                      >
                                                            <div className="flex items-center">
                                                                  <Search size={14} className="mr-2 text-gray-400" />
                                                                  {suggestion}
                                                            </div>
                                                      </li>
                                                ))}
                                          </ul>
                                    </div>
                              )}
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                              <span className="text-sm">Trending:</span>
                              <button className="text-sm text-blue-600 hover:underline">Web Design</button>
                              <button className="text-sm text-blue-600 hover:underline">UI Components</button>
                              <button className="text-sm text-blue-600 hover:underline">React Hooks</button>
                        </div>

                        <div className="mt-6 pt-4 border-t border-gray-200">
                              <div className="text-sm text-gray-600">
                                    <p>Advanced options:</p>
                                    <div className="mt-2 grid grid-cols-2 gap-2">
                                          <label className="flex items-center">
                                                <input type="checkbox" className="mr-2" />
                                                Exact match
                                          </label>
                                          <label className="flex items-center">
                                                <input type="checkbox" className="mr-2" />
                                                Include archives
                                          </label>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
