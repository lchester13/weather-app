import Image from 'next/image'



export default function Home() {
 
  return (
    <div className="flex py-5 items-center h-screen flex-col">
    <div>
      <h2 className="font-raleway text-5xl font-extrabold mb-10 sm:text-4xl">
        Weather App
      </h2>
      <button class="bg-white hover:bg-white-700 text-black font-bold py-2 px-4 rounded">
        Store Current Temperature
     </button>

     <button class="bg-white hover:bg-white-700 text-black font-bold py-2 px-2 rounded">
        Show Previous Temperature
     </button>
    
    </div>
  </div>





 );
}
