import React from 'react';

const Gallery = () => {
    return (
      <div>
        <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
          <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <img
              src="https://images.carexpert.com.au/resize/3000/-/app/uploads/2023/02/2023-Mitsubishi-Pajero-Sport-GSR-HERO-16x9-1.jpg"
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
            />
            <img
              src="https://imgd.aeplcdn.com/664x374/ec/b8/0e/9739/img/m/Mitsubishi-Pajero-Sport-Right-Front-Three-Quarter-52939_ol.jpg?v=201711021421&q=80&q=80"
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?1"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?2"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?3"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?4"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?5"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?6"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            />
            <img
              src="https://resource.digitaldealer.com.au/image/172707184763be3ca937653117837411_0_0.png"
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
            />
          </div>
        </section>
      </div>
    );
};

export default Gallery;