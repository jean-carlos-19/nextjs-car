"use client";
import { useState } from "react";
import { SearchModel } from "@/models";

const search: SearchModel = {
  search: "",
  make:""
};

const useSearchBar = () => {
  const [entity] = useState(search);

  return { entity };
};
export { useSearchBar };
