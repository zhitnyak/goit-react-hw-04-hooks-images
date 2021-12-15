const API_KEY = "22603097-01ea7c9e46d89c9af2e821f90";
const BASE_URL = "https://pixabay.com/api/";

function fetchImg(searchQuery, page) {
  return fetch(
    `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
}

export default fetchImg;
