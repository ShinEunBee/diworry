import { useQuery } from "@tanstack/react-query";
import { fetchWorries } from "../api/worryApi";

export const useWorries = () => {
    return useQuery({
        queryKey: ['worries'],
        queryFn: fetchWorries
    });
};