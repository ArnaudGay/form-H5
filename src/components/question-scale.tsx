import React from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

interface QuestionScaleProps {
  question: string;
  value?: string;
  onChange: (value: string) => void;
  name: string;
}

export function QuestionScale({ question, value, onChange, name }: QuestionScaleProps) {
  const options = [
    { value: '1', label: '' },
    { value: '2', label: '' },
    { value: '3', label: '' },
    { value: '4', label: '' },
    { value: '5', label: '' },
    { value: '6', label: '' },
    { value: '7', label: '' },
  ];

  return (
    <div className="space-y-6">
      <p className="text-gray-700">{question}</p>
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm text-teal-400 whitespace-nowrap">D'accord</span>
        <RadioGroup
          value={value}
          onValueChange={onChange}
          className="flex items-center gap-3"
        >
          {options.map((option, index) => (
            <div key={option.value} className="relative">
              <RadioGroupItem
                value={option.value}
                id={`${name}-${option.value}`}
                className={`w-12 h-12 border-2 rounded-full cursor-pointer transition-all ${
                  value === option.value
                    ? index < 3
                      ? 'border-teal-400 bg-teal-200'
                      : index > 3
                      ? 'border-purple-300 bg-purple-200'
                      : 'border-gray-300 bg-gray-200'
                    : 'border-gray-300 bg-transparent hover:border-gray-400'
                }`}
              />
              {value === option.value && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg
                    className={`w-5 h-5 ${
                      index < 3 ? 'text-teal-600' : index > 3 ? 'text-purple-600' : 'text-gray-600'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </RadioGroup>
        <span className="text-sm text-purple-300 whitespace-nowrap">En désaccord</span>
      </div>
    </div>
  );
}
