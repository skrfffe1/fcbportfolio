import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Sansita_Swashed, Lexend_Zetta } from 'next/font/google'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/pages/home', current: true },
  { name: 'Menu', href: '/pages/menu', current: false },
  { name: 'About', href: '/pages/about', current: false },
  { name: 'Shop', href: '/pages/shop', current: false },
]

const sansita_swashed = Sansita_Swashed({
  subsets: ['latin'],
  weight: ['300', '700']
});

const lexend_zetta = Lexend_Zetta({
  subsets: ['latin'],
  weight: ['700'],
});

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="pt-4 lg:pr-8">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-shrink-0">
            <div className={lexend_zetta.className}>
                <div className="text-3xl pt-6">
                    <h1>BURGR.</h1>
                </div>   
            </div>
          </div>
          <div className="flex flex-1 lg:justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
                <div className={`flex space-x-14 text-xl ${sansita_swashed.className}`}>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
