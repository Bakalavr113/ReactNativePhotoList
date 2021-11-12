import * as axios from "axios";

export const  PhotoApi = {
  getPhotos() {
    return axios.get("https://jsonplaceholder.typicode.com/photos?albumId=1").then((response) => response.data);
  },
};
