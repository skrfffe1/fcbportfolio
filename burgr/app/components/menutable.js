"use client";
import Image from 'next/image';
import sampleMenuData from '../data/menudata';

export default function Page() {
    return (
        <>
            <div className="absolute flex gap-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg shadow-lg">
                <div className="grid grid-rows-2 grid-flow-col gap-4 backdrop-blur-[3px]">
                {sampleMenuData.map((item) => (
                        <div key={item.id} className="grid h-60 w-60">
                           <div className='grid grid-rows-1 place-items-center'>
                                <div>
                                    <Image 
                                        src={item.image}
                                        height={120}
                                        width={120}
                                    />
                                </div>
                                <div className='p-1'>
                                    <div className='grid box-border border-2 w-63  place-items-center'>
                                        <div className='relative'>
                                            <h4 className='font-mono text-md font-semibold antialiased'>{item.name}</h4>
                                        </div>
                                        <div className='relative'>
                                            <h4 className='font-mono text-sm italic font-semibold antialiased'>{item.price}</h4>
                                        </div>
                                    </div>
                                </div>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}