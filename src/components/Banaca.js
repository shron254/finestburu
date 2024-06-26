import Baca1 from '../components/Myimages/finest.png';
import Baca2 from '../components/Myimages/final1.jpg';
import Baca3 from '../components/Myimages/final15.jpg';
import Image from 'next/image';
import Link from 'next/link';


function Banaca() {
  return (

    <div className="md:mt-24 md:mb-10">
       
    <div className="md:relative flex md:flex-row md:justify-evenly flex-col mt-24 md:mt-2 bg-white md:bg-transparent">

     

      {/*BANACA 1 */}
        <div className="bg-transparent justify-center md:bg-white md:w-full md:h-72 p-3 flex flex-col  justify-evenly opacity-100">
          
        <h1 className='md:text-4xl text-3xl font-bold text-yellow-800'>Binary, Your path to prosperity</h1>  
          <div className='flex flex-col md:flex-row justify-evenly mt-5'>
         
            <div className="p-2 mb-10 flex md:flex-row">
              <div>
                <h1 className="font-bold text-xl md:text-xl py-4">Introducing Deriv Killer 1.0</h1>
                <p className="text-lg md:text-xl font-old py-2 mb-2 md:mb-5 -mt-4">KSH 10,000</p>
                <Link href="/product/5">
                  <a className="bg-blue-900 text-white rounded-full p-4 text-lg font-bold mt-6">
                    Shop Now
                  </a>
                </Link>
              </div>
                <div
                style={{
                  width: '200px',
                  height: '200px',
                  marginTop: '10px', 
                  '@media (min-width: 640px)': {
                    width: '400px',
                    height: '400px',
                  },
                }}
                className="rounded-md overflow-hidden"
              >
                <Image src={Baca3} style={{ width: '100%', height: '100%' }} />
              </div>

              </div>
               
            
            
              <div className="p-2 mb-10 flex -mt-16 md:mt-0 md:flex-row">
            
                          <div
                style={{
                  width: '220px',
                  height: '220px',
                  marginTop: '10px', 
                  '@media (min-width: 640px)': {
                    width: '400px',
                    height: '400px',
                  },
                }}
                className="rounded-md overflow-hidden "
              >
                <Image src={Baca2} style={{ width: '100%', height: '100%' }} />
              </div>
              <div>
                <h1 className="font-bold text-xl md:text-xl py-4">Introducing Deriv Killer 2.0</h1>
                <p className="text-lg md:text-xl font-old py-2 mb-2 md:mb-5 -mt-4">KSH 10,000</p>
                <Link href="/product/4">
                  <a className="bg-blue-900 text-white rounded-full p-4 text-lg font-bold mt-6">
                    Shop Now
                  </a>
                </Link>
              </div>
              </div>


              </div>

              </div>
          </div>


        
    
    </div>
    


   
  );
}

export default Banaca;
