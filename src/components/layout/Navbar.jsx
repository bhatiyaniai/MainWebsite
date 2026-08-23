import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import logo from '../../assets/logo.png';

// Icons
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', to: '/', current: true, dropdown: false },
  {
    name: 'Solutions',
    to: '/solutions',
    current: false,
    dropdown: false
  },
  { name: 'Blog', to: '/resources/blog', current: false, dropdown: false },
  { name: 'About Us', to: '/about', current: false, dropdown: false },
  {
    name: 'Contact',
    to: '#',
    current: false,
    dropdown: true,
    items: [
      { name: 'Sales Enquiry', to: '/contact/sales' },
      { name: 'Customer Support', to: '/contact/support' },
      { name: 'Careers', to: '/contact/careers' }
    ]
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();
  const isDarkHero = location.pathname === '/';

  // Handle dropdown visibility
  const handleDropdownEnter = (name) => {
    clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className="absolute w-full z-50 transition-all duration-300 left-0 right-0 px-4 sm:px-6 lg:px-8 top-6"
    >
      {({ open }) => (
        <div className={classNames(
          "mx-auto max-w-7xl transition-all duration-300",
          open ? "rounded-3xl" : "rounded-full",
          isDarkHero
            ? "bg-white/10 dark:bg-secondary-950/20 backdrop-blur-md shadow-sm border border-white/20 dark:border-secondary-800/50"
            : "bg-white/60 dark:bg-secondary-950/60 backdrop-blur-md shadow-sm border border-secondary-200/50 dark:border-secondary-800/50"
        )}>
          <div className="container-custom">
            <div className="relative flex h-20 items-center justify-between">
              {/* Mobile menu button on the right side */}
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                <Disclosure.Button className={classNames(
                  "relative inline-flex items-center justify-center rounded-full p-2 transition-colors duration-300",
                  isDarkHero
                    ? "text-white hover:bg-white/20"
                    : "text-secondary-800 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-800"
                )}>
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Company name on the left */}
              <div className="flex flex-1 items-center">
                <motion.div
                  className="flex flex-shrink-0 items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link to="/" className="flex items-center text-[13px] min-[360px]:text-[15px] sm:text-lg lg:text-xl font-heading font-bold text-primary-600 dark:text-primary-400 drop-shadow-sm">
                    <img src={logo} alt="Company Logo" className="h-6 w-6 sm:h-8 sm:w-8 mr-1.5 sm:mr-2 flex-shrink-0 drop-shadow-md" />
                    <span className="leading-tight">Bhatiyani Astute Intelligence</span>
                  </Link>
                </motion.div>
              </div>

              {/* Navigation and dark mode toggle on the right */}
              <div className="hidden md:flex items-center space-x-4">
                <div className="flex space-x-4 items-center h-full">
                  {navigation.map((item) => {
                    const isActive = item.to !== '#' && (location.pathname === item.to || (item.to !== '/' && location.pathname.startsWith(item.to)));
                    return (
                      <div
                        key={item.name}
                        className="relative flex items-center h-full"
                        onMouseEnter={() => item.dropdown ? handleDropdownEnter(item.name) : null}
                        onMouseLeave={handleDropdownLeave}
                      >
                        {item.dropdown ? (
                          <div className="relative h-full flex items-center"
                            onClick={() => activeDropdown === item.name ? setActiveDropdown(null) : handleDropdownEnter(item.name)}>
                            <button
                              className={classNames(
                                'nav-link h-full px-3 py-2 text-sm font-semibold flex items-center gap-1 drop-shadow-sm transition-colors',
                                activeDropdown === item.name
                                  ? 'text-primary-500'
                                  : (isDarkHero ? 'text-white/90 hover:text-white' : 'text-secondary-700 dark:text-secondary-200 hover:text-primary-600')
                              )}
                            >
                              {item.name}
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {activeDropdown === item.name && (
                              <div
                                className="absolute z-10 right-0 top-full mt-1 w-56 origin-top-right rounded-md bg-white dark:bg-secondary-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                onMouseEnter={() => handleDropdownEnter(item.name)}
                                onMouseLeave={handleDropdownLeave}
                              >
                                <div className="py-1">
                                  {item.items.map((dropdownItem) => (
                                    <Link
                                      key={dropdownItem.name}
                                      to={dropdownItem.to}
                                      className="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-800"
                                    >
                                      {dropdownItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            to={item.to}
                            className={classNames(
                                'nav-link h-full px-3 py-2 text-sm font-semibold flex items-center drop-shadow-sm transition-colors',
                                isActive
                                  ? 'text-primary-500'
                                  : (isDarkHero ? 'text-white/90 hover:text-white' : 'text-secondary-700 dark:text-secondary-200 hover:text-primary-600')
                              )}
                            aria-current={isActive ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Dark mode toggle */}
                <button
                  type="button"
                  className={classNames(
                    "relative rounded-full p-1.5 flex items-center justify-center transition-colors",
                    isDarkHero
                      ? "text-white hover:bg-white/20"
                      : "text-secondary-700 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-800"
                  )}
                  onClick={toggleDarkMode}
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Toggle dark mode</span>
                  {darkMode ? (
                    <SunIcon className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <MoonIcon className="h-5 w-5" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden w-full transition-all">
            <div className="space-y-1 px-4 pb-6 pt-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <Disclosure>
                      {({ open: subOpen }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              'w-full flex justify-between items-center rounded-md px-3 py-3 text-base font-medium',
                              subOpen ? 'bg-secondary-50 dark:bg-secondary-900 text-primary-600 dark:text-primary-400' : 'text-secondary-800 dark:text-secondary-200 hover:bg-secondary-50 dark:hover:bg-secondary-900'
                            )}
                          >
                            <span>{item.name}</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className={classNames(
                                "h-4 w-4 transition-transform",
                                subOpen ? "transform rotate-180" : ""
                              )}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Disclosure.Button>
                          <Disclosure.Panel className="pl-4 py-2 space-y-1">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.to}
                                className="block rounded-md px-3 py-2.5 text-sm font-medium text-secondary-600 dark:text-secondary-400 hover:text-primary-600 hover:bg-secondary-50 dark:hover:bg-secondary-900"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ) : (
                    <Link
                      to={item.to}
                      className={classNames(
                        'block rounded-md px-3 py-3 text-base font-medium transition-colors',
                        item.current
                          ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                          : 'text-secondary-800 dark:text-secondary-200 hover:bg-secondary-50 dark:hover:bg-secondary-900'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar; 