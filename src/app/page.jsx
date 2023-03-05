import HomeHeader from '@/components/HomeHeader';
import HomeSearch from '@/components/HomeSearch';
import Image from 'next/image';


export default function page() {
  return (
   <>
   <HomeHeader/>

   <div className='flex flex-col items-center mt-24'>
      <Image width='300' height='100' src='https://upload.wikimedia.org/wikipedia/commons/3/3e/Google_2011_logo.png'/>

      <HomeSearch/>
   </div>
   </>
  );
}

