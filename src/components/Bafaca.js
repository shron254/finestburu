// React import
import React from 'react';
import Baca4 from '../components/Myimages/final1.jpg';
import Baca5 from '../components/Myimages/final1.jpg';
import Baca6 from '../components/Myimages/forexpic.png';
import Image from 'next/image';
import Link from 'next/link';
import CountdownTimer from './CountDownTimer';



function Bafaca() {
  return (
    <div className="md:mt-20 ">
      <div className="md:relative flex md:flex-row md:justify-evenly flex-col mt-36 m-2 mb-4  md:-mt-20 md:mb-20 bg-white md:bg-transparent">
        {/* BANACA 1 */}
        <div className="md:bg-blue-900 bg-white border border-blue-900 -mt-64 md:mt-0 md:rounded-full md:w-5/6 md:h-82 p-3 flex flex-col justify-center opacity-100 md:shadow-md">

          

            <div className='flex flex-row items-center justify-center justify-evenly bg-blue-900 md:bg-transparent -mx-3'>
                <h1 className='text-red-500 -mt-1 md:text-xl text-sm font-semibold'>Our Top Sales</h1>
                {/* Add the CountdownTimer component here */}
                <CountdownTimer hours={2} minutes={30} seconds={0} />   
            </div>

              <div className='flex md:flex-row flex-col justify-evenly items-center mt-3'>


                <div className='flex flex-col'>
                      <div
                        style={{
                          width: '150px',
                          height: '150px',
                          marginTop: '10px', 
                          '@media (min-width: 640px)': {
                            width: '400px',
                            height: '400px',
                          },
                        }}
                        className="rounded-md overflow-hidden"
                      >
                        <Image src={Baca5} style={{ width: '100%', height: '100%' }} />
                      </div>
                  
                        <h1 className='md:text-white text-blue-900 text-center font-bold md:font-semibold'>Deriv Killer 2.0</h1>
                        <h1 className='md:text-white text-blue-900 text-center font-bold md:font-semibold'>Ksh 12,000</h1>
                        <Link href="/product/4">
                            <a className="bg-yellow-600 text-white text-center rounded-full p-2 text-lg font-bold mt-3">
                              Shop Now
                            </a>
                        </Link>
                      
                  </div>


                  <div className='flex flex-col'>
                      <div
                        style={{
                          width: '150px',
                          height: '150px',
                          marginTop: '10px', 
                          '@media (min-width: 640px)': {
                            width: '400px',
                            height: '400px',
                          },
                        }}
                        className="rounded-md overflow-hidden"
                      >
                        <Image src={Baca6} style={{ width: '100%', height: '100%' }} />
                      </div>

                      <h1 className='md:text-white text-blue-900 text-center font-bold md:font-semibold'>Deriv Killer 3.0</h1>
                        <h1 className='md:text-white text-blue-900 text-center font-bold md:font-semibold'>Ksh 15,000</h1>
                        <Link href="/product/6">
                            <a className="bg-yellow-600 text-white text-center rounded-full p-2 text-lg font-bold mt-3">
                              Shop Now
                            </a>
                        </Link>

                  </div>


            </div>

             





            
                  
        </div>
      </div>
    </div>
  );
}

export default Bafaca;
