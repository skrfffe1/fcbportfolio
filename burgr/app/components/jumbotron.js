import { Sansita_Swashed, Lexend_Zetta } from 'next/font/google'
import Image from 'next/image'
import Burger from '../../images/burger.png'

const lexend_zetta = Lexend_Zetta({
    subsets: ['latin'],
    weight: ['700']
});

const sansita_swashed = Sansita_Swashed({
    subsets: ['latin'],
    weight: ['700']
});

export default function Jumbotron() {
    return (
        <>
            <div className='columns-2 gap-0 pr-28'>
                <section class="">
                    <div class="mx-auto text-center lg:py-40 ml-8">
                        <p class={`text-xl font-normal text-gray-400 lg:text-lg sm:px-16 lg:px-48 dark:text-gray-400 ${lexend_zetta.className}`}>THE ULTIMATE</p>
                        <h1 class={`mb-6 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-8xl dark:text-white ${sansita_swashed.className}`}>Burger Club</h1>
                        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                            <p class={`text-sm font-normal text-gray-400 sm:px-16 lg:px-38 dark:text-gray-400 ${lexend_zetta.className}`}>Savor the Flavor, Join the Club!</p>
                        </div>
                    </div>
                    <div className=''>
                        <Image
                            src={Burger}
                            alt="Burger picture"
                            width={650}
                            height={650}
                        />
                    </div>
                </section>
            </div>
        </>
    )
}