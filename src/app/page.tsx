"use client";

import { CarCard, SearchBar } from "@/atomic/component";
import { Hero } from "@/atomic/component";
import { useHome } from "./hooks";

export default function Home() {
  const { data, isDataEmpty, searchCar } = useHome();

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-bold">Car Catalogue</h1>
          <p>Explore the cars you might like </p>
        </div>
        <div className="home__filters">
          <SearchBar searchCar={searchCar} />
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {data.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-conta">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
