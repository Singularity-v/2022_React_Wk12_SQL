import { useQuery } from '@tanstack/react-query'
import { getActorById, getActors } from "../api";

export const useActors = (url) => {
   const { data, isLoading } = useQuery([url], getActors)
   return { data, isLoading };
};

export const useActortById = (productId) => {
   const { data, isLoading } = useQuery([productId], getActorById)
   return { data, isLoading };
}
