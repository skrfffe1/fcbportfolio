"use client";
import Image from 'next/image';
import { Sansita_Swashed, Lexend_Zetta } from 'next/font/google'
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Background from '../../components/menubg';

import Burger from '../../../images/burger-about.avif';
import stockcake1 from '../../../images/StockCake-Burger Meal Prep_1726755478.jpg';
import stockcake4 from '../../../images/StockCake-Joyful Food Vendor_1726755329.jpg';
import notFound from '../../../images/404.png';
import burgerGallery from '../../../images/burger-with-french-fries-facebook-cover.jpg'


const sansita_swashed = Sansita_Swashed({
    subsets: ['latin'],
    weight: ['300', '700']
});

const lexend_zetta = Lexend_Zetta({
    subsets: ['latin'],
   
});

export default function Page() {
    return (
        <>
            
            <Navbar />
            
            <div className="sm:flex items-center max-w-screen-xl">
                <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center pl-20">
                        <Image
                            src={Burger}
                            alt='burger'
                            width={400}
                            height={`auto`}
                            className='rounded-e-2xl rounded-t-2xl transition-all duration-200 blur-[1px] hover:blur-none'

                        />
                    </div>
                </div>
                <div className="sm:w-1/2 p-5">
                    <div className="text">

                        <h2 className={`my-3 font-bold text-4xl  sm:text-3xl ${lexend_zetta.className}`}>About the <span>Club</span>
                        </h2>
                        <h1 className={`text-xl tracking-widest text-gray-100 font-thin subpixel-antialiased ${sansita_swashed.className}`}>
                            Welcome to the Burger Club, the ultimate haven for burger enthusiasts! Whether you love classic cheeseburgers or innovative creations, we celebrate all things burger. Join us to explore new flavors, share recipes, and discover the best burger spots around. Let’s savor every bite together!
                        </h1>
                    </div>
                </div>
            </div>

            {/* Gallery */}

            <div class="h-screen py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                        <div class="flex items-center gap-12">
                            <h2 class={`text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white ${lexend_zetta.className}`}>Gallery</h2>

                            <p class="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block font-semibold">
                                This is a section of some simple filler text,
                                also known as placeholder text. It shares some characteristics of a real written text.
                            </p>
                        </div>

                        <a href="#"
                            class="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">
                            More
                        </a>
                    </div>

                    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">

                        <a href="#"
                            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                            <Image
                                src={stockcake1}
                                alt='a burger'
                                width={'100%'}
                                height={'100%'}
                                loading='lazy'
                                className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                            />

                            <div
                                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Order prep</span>
                        </a>

                        <a href="#"
                            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">

                            <Image
                                src={notFound}
                                alt='notFound'
                                width={'100%'}
                                height={'100%'}
                                loading='lazy'
                                className='absolute inset-0 h-full w-full object-scale-down object-center transition duration-200 group-hover:scale-110'
                            />

                            <div
                                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>
                        </a>

                        <a href="#"
                            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                            <Image
                                fill
                                src={burgerGallery}
                                alt='burgerfries'
                                loading='lazy'
                                className='absolute inset-0 h-full w-full object-scale-down object-center transition duration-200 group-hover:scale-110'
                            />

                            <div
                                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Burger Fries</span>
                        </a>

                        <a href="#"
                            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">

                            <Image
                                src={stockcake4}
                                alt='a burger'
                                loading='lazy'
                                className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                            />

                            <div
                                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Jacob</span>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}