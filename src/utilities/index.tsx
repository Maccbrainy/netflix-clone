import { useMemo } from "react"
import { useLocation } from "react-router-dom";

export const useQueryParams = () => {
    let {search} = useLocation();
    return useMemo(()=> new URLSearchParams(search), [search]);
  }

export const useQueryParams = () => {
    let {search} = useLocation();
    return useMemo(()=> new URLSearchParams(search), [search]);
  }