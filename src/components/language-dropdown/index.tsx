import {useState} from 'react';
import {useTranslation} from "react-i18next";

export default function Component() {

    const {i18n} = useTranslation();

    const langs: { label: string, value: string }[] = [
        {
            label: 'Ru',
            value: 'ru',
        },
        {
            label: 'Uz',
            value: 'uz'
        },
        {
            label: "En",
            value: 'en',
        }
    ]

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectLanguage = async (lang: { label: string, value: string }) => {
        await i18n.changeLanguage(lang.value);
        setIsOpen(false);
    };

    return (
        <div className="relative text-left">
            <div>
                <button
                    onClick={toggleDropdown}
                    className="flex items-center justify-center capitalize w-full px-4 text-base font-medium text-white"
                >
                    {i18n.language}
                    <svg
                        className={`-mr-1 ml-1 w-6 transform transition-transform duration-200 ${
                            !isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 3a1 1 0 01.7.3l3.3 3.3a1 1 0 11-1.4 1.4L10 5.42 7.4 8.02a1 1 0 11-1.4-1.4l3.3-3.3A1 1 0 0110 3z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div className="py-1" role="none">
                        {
                            langs.map((lang, index) => (
                                <button
                                    key={index}
                                    onClick={() => selectLanguage(lang)}
                                    className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                >
                                    {lang.label}
                                </button>
                            ))
                        }
                    </div>
                </div>
            )}
        </div>
    );
};