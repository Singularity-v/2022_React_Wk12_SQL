import axios from "axios"

const URL = "http://127.0.0.1:5000/api/v1"

export const getActorById = async ({ queryKey }) => {
  const [actorId] = queryKey;
  let data = await axios.get(`${URL}/actors/id/${actorId}`);
  return data.data;
}

export const getActors = async ({ queryKey }) => {
  const [url] = queryKey;
  let data;
  if (url === "")
    data = await axios.get(`${URL}/actors/all`);
  else
    data = await axios.get(`${URL}/actors/${url}`);

  return data;
}


