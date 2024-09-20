"use client";

import { Disclosure} from '@headlessui/react'
import { Sansita_Swashed, Lexend_Zetta } from 'next/font/google'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/pages/home', current: true },
  { name: 'Menu', href: '/pages/menu', current: false },
  { name: 'About', href: '/pages/about', current: false },
  { name: 'Shop', href: '/pages/shop', current: false },
]

export const sansita_swashed = Sansita_Swashed({
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
    <Disclosure as="nav" className="pt-4 lg:pr-8" >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            
          </div>
          <div className="flex flex-shrink-0">
            <div className={lexend_zetta.className}>
                <div className="text-3xl pt-6">
                    <h1>BURGR.</h1>
                </div>   
            </div>
          </div>
          <div className="grid lg:place-items-end sm:items-stretch sm:justify-start ">
            <div className="hidden sm:ml-6 sm:block">
                <div className={`flex space-x-14 text-xl  ${sansita_swashed.className} `}>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className='hover:text-blue-200' 
                      scroll={false}                    
                    >
                        {item.name}
                    </Link>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  )
}
