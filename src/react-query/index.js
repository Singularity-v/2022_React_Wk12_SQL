import { useQuery } from '@tanstack/react-query'
import { getActorById, getActors } from "../api";

export const useActors = (url) => {
   const { data, isLoading } = useQuery([url], getActors)
   return { data, isLoading };
};

export const useActortById = (actorId) => {
   const { data, isLoading } = useQuery([actorId], getActorById)
   return { data, isLoading };
}
