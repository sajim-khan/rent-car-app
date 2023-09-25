import React from 'react';

const Gallery = () => {
    return (
      <div>
        <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
          <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <img
              src="https://parkers-images.bauersecure.com/Scale/pagefiles/315233/manufacturers/900x600/audi.jpg"
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
            />
            <img
              src="https://images.pexels.com/photos/11139552/pexels-photo-11139552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://cdn.motor1.com/images/mgl/jlxPQy/s3/bugatti-chiron-profilee-2022.webp"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/BMW-2-Series-Gran-Coupe-271220221147.jpg&w=373&h=245&q=75&c=1"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Audi-A4-190120211207.jpg&w=373&h=245&q=75&c=1"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://hd2.tudocdn.net/1018519?w=660&h=495"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://bgr.com/wp-content/uploads/2017/11/tesla-roadster.jpg?quality=82&strip=all&w=1000&h=574&crop=1"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Audi-Q3-300820222026.jpg&w=373&h=245&q=75&c=1"
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

