import api from "./api"

export const getImagesImgix = async () => {
  const {data} = await api.get("https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json");
  return data
}