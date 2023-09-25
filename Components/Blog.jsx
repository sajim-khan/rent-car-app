import React from 'react';

const Blog = () => {
    return (
      <div>
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <a
              rel="noopener noreferrer"
              href="#"
              className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
            >
              <img
                src="https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
              />
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                  Lamborghini
                </h3>
                <span className="text-xs dark:text-gray-400">
                  February 19, 2023
                </span>
                <p>
                  Raise the performance driving experience to a whole new level
                  with the 2023 Lamborghini Urus Performante SUV. The first-ever
                  Super Sport Utility Vehicle comes with a mightier powertrain
                  than the previous generations to set new standards for
                  performance driving experience on or off the road. Explore the
                  key features of the 2023 Lamborghini Urus Performante at
                  Lamborghini Palm Beach in West Palm Beach, FL.
                </p>
              </div>
            </a>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://images.pexels.com/photos/8254082/pexels-photo-8254082.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    Ferrari
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 21, 2023
                  </span>
                  <p>
                    Ferrari cars are renowned for their extraordinary
                    combination of high-performance engines, exquisite
                    aerodynamic design, advanced technology, limited production
                    numbers, extensive customization options, and a rich racing
                    heritage, making them the epitome of luxury and exclusivity
                    in the automotive world.
                  </p>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    Audi
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    Mar 22, 2023
                  </span>
                  <p>
                    Audi, a renowned German automaker and part of the Volkswagen
                    Group, is celebrated for its commitment to quality,
                    innovation, and luxury. Audi Sport produces high-performance
                    RS and R8 models, while the brand has a storied history in
                    motorsports, including Le Mans and Formula E. With a global
                    presence and a focus on sustainability, Audi continues to be
                    a leading force in the automotive industry.
                  </p>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://hips.hearstapps.com/hmg-prod/images/bugatti-mistral-roadster-112-1660658850.jpg?resize=1200:*"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    Bugatti
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 7, 2023
                  </span>
                  <p>
                    Bugatti is a famous French carmaker known for its super-fast
                    and super-expensive cars. They've been making cool cars
                    since 1909.People love Bugatti cars for their unique design
                    and top-notch technology. They're like works of art on
                    wheels and are known for their exclusive style and high
                    price tags. Bugatti's racing history and limited-edition
                    models make them a symbol of luxury and speed in the car
                    world.
                  </p>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://car-images.bauersecure.com/wp-images/13349/1056x594/80-mercedes-amg-gt63-e-performance-hero.jpg"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    Mercedes
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 24, 2021
                  </span>
                  <p>
                    Mercedes-Benz, a renowned German automaker founded in 1926,
                    Mercedes-Benz offers a diverse range of vehicles, from
                    compact cars to high-performance AMG models, and is globally
                    recognized for its iconic models such as the S-Class and
                    E-Class. With a strong presence worldwide, Mercedes-Benz
                    continues to lead in luxury and technology, maintaining its
                    status as a premier automaker.
                  </p>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://s3-prod.autonews.com/s3fs-public/IEIGHT-MAIN_i.jpg"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    BMW
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 25, 2022
                  </span>
                  <p>
                    BMW, short for Bayerische Motoren Werke AG, is a renowned
                    German automobile manufacturer known for producing
                    high-performance and luxury vehicles. Founded in 1916, BMW
                    has established itself as a symbol of precision engineering,
                    delivering a range of cars that combine powerful engines,
                    innovative technology, and elegant design. Whether it's
                    their sporty M-series, versatile SUVs, or stylish sedans,
                    BMW consistently caters to drivers seeking a balance of
                    performance, comfort, and prestige in their automotive
                    experience.
                  </p>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/480x360?6"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 26, 2021
                  </span>
                  <p>
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                </div>
              </a>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400"
              >
                Load more posts...
              </button>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Blog;