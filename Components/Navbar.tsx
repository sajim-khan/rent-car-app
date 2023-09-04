import Link from 'next/link';
import Image from 'next/image';
import CustomButton  from './CustomButton';

const Navbar = () => {
    return (
        <header className='w-full absolute z-10'>
            <nav className='max-w=[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
               <div>
                <Link href='/' className='flex justify-center items-center'>
                <Image src="/logo.svg" alt= "Car Hub Logo" width={118} height={18} className='object-contain'></Image>
               </Link> 
               </div>
               <div className='flex justify-center items-center font-bold'>
                <p className='mr-5'>Home</p>
                <p className='mr-5'>About</p>
                <p className='mr-5'>Find Car</p>
                <p className='mr-5'>Blog</p>
                <p className='mr-5 bg-shadow-xl p-2 rounded-full'>Contact</p>
               </div>
               <div >
               <CustomButton
                title="Login"
                btnType="button"
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
               />
               </div>
            </nav>
        </header>
    );
};

export default Navbar;

