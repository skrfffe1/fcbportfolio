"use client";

import Image from 'next/image';
import image1 from '../../images/menu-bg-1.png';
import image3 from '../../images/menu-bg-3.png';
import image4 from '../../images/menu-bg-4.png';
import image5 from '../../images/menu-bg-5.png';
import image6 from '../../images/menu-bg-6.png';

export default function Page() {
    return (
        <div className='relative bg-cover bg-center'>
            <div className={`grid grid-cols-5 gap-4 h-auto p-20`}>
                <Image
                    src={image5}
                    alt='burgr'
                    height={200}
                    width={200}
                    className='col-start-1 rotate-45'
                />

                <Image
                    src={image4}
                    alt='soup'
                    height={200}
                    width={200}
                    className='col-start-4'
                />
                <Image
                    src={image3}
                    alt='squid_rings'
                    height={200}
                    width={200}
                    className='col-end-1 -rotate-45'
                />
                <Image
                    src={image1}
                    alt='burgr_patty'
                    height={135}
                    width={135}
                    className='col-end-3'
                />
                <Image
                    src={image6}
                    alt='burgr_drinks'
                    height={500}
                    width={500}
                    className='col-end-6 -rotate-45'
                />
            </div>
        </div>
    )
}