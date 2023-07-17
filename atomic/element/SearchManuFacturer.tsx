"use client";
import React, { useState, Fragment, useEffect } from 'react'
import Image from 'next/image'
import { searchManuFacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import { manufacturers } from '@/global/data'


const SearchManuFacturer = (props: searchManuFacturerProps) => {

  const {value,handleChangue } = props;
  const [query, setQuery] = useState('');

  useEffect(() => {
    if(value !== query) setQuery(value);
  }, [value]);

  const filteredManuFactures = query === "" ? manufacturers : manufacturers.filter((item) => (
    item.toLocaleLowerCase().replace(/\s+/g, "").includes(query.toLocaleLowerCase().replace(/\s+/g, ""))
  ))

  return (
    <div className='search-manufacturer'>
      <Combobox value={value} onChange={handleChangue} >
        <div className="relative w-full">
          <Combobox.Button className={"absolute top-[14px]"} >
            <Image
              src={"/car-logo.svg"}
              width={20}
              height={20}
              className='ml-4'
              alt='Car Logo'
            />
          </Combobox.Button>
          <Combobox.Input
            className={"search-manufacturer__input"}
            placeholder='Volkswagen'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e)=>setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
              {
                filteredManuFactures.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) => `
                         relative search-manufactured__option ${active ? 'bg-primary-blue text-white' : "text-gray-900"}
                       `}
                    value={item}
                  >
                    {({ active, selected })=>(
                    <li
                      className={`${active ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                    > 
                      {item}
                    </li>
                   )}
                  </Combobox.Option>
                ))
              }
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export { SearchManuFacturer }
