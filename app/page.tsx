// import About from '@/Components/About'
// import Contact from '@/Components/Contact'

// import { CarCard, CustomFilter } from '@/Components'
import Hero from '@/Components/Hero'
// import SearchBar from '@/Components/SearchBar'
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home() {
  const allCars = await fetchCars({
    // manufacturer: searchParams.manufacturer || "",
    // year: searchParams.year || 2022,
    // fuel: searchParams.fuel || "",
    // limit: searchParams.limit || 10,
    // model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  console.log(allCars)

  return (
    <main className="overflow-hidden">
    <Hero></Hero>
    <div className="" id="discover">
      <div className=''>
      <h1 className='text-7xl flex items-center justify-center font-extrabold'>Gallery</h1><br />
        <p className='text-center'>Explore the cars you might like</p>
      </div>
      <div className='home__filters'>
      {/* <SearchBar /> */}
        <div className='home__filter-container'>
          {/* <CustomFilter title="fuel" />
          <CustomFilter title="year" /> */}
        </div>
        
      </div>
      
      { !isDataEmpty ? (
        <section>
          {/* <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={ car} />
                ))}
          </div> */}
        </section>
      ) : ( 
      <div >
        {/* <h1 className='text-black text-xl font-bold'>No result!</h1> */}
              {/* <p>{ allCars?.message}</p> */}
      </div> )}
      
    </div>
    {/* <About></About>
    <Contact></Contact> */}
    
    </main>
  )
}
