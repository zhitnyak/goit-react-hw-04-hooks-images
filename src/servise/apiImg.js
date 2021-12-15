const API_KEY = "22603097-01ea7c9e46d89c9af2e821f90";
const BASE_URL = "https://pixabay.com/api/";

function fetchImg(searchQuery, pages) {
  return fetch(
    `${BASE_URL}?q=${searchQuery}&page=${pages}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`No images on request`));
  });
}

export { fetchImg };
