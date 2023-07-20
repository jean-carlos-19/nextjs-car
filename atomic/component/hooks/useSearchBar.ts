"use client";
import { useState } from "react";
import { SearchModel } from "@/models";

const search: SearchModel = {
  make: "",
  model:""
};

const useSearchBar = () => {
  const [entity] = useState(search);

  return { entity };
};
export { useSearchBar };
