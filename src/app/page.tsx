"use client";

import Image from "next/image";
import { CarCard, SearchBar } from "@/atomic/component";
import { Hero } from "@/atomic/component";
import { CustomFilter } from "@/atomic/element";
import { useHome } from "./hooks";

export default function Home() {
  const { data, isDataEmpty } = useHome();

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-bold">Car Catalogue</h1>
          <p>Explore the cars you might like </p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
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
