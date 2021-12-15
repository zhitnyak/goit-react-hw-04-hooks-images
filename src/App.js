import { useState } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import "./App.module.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const sendQueryInState = (data) => {
    setSearchQuery(data);
  };

  return (
    <>
      <Searchbar onSubmit={sendQueryInState} />
      <ImageGallery query={searchQuery} />
    </>
  );
}
export default App;
