// import css from "../../App.module.css";
// import PropTypes from "prop-types";
// import React, { Component } from "react";
// import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
// import Button from "../Button/Button";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";
// import Modal from "../Modal/Modal";

// import { fetchImg } from "../../servise/apiImg";
// class ImageGallery extends Component {
//   state = {
//     status: "idle",
//   };

//   componentDidUpdate(prevProps) {
//     const prevSearch = prevProps.searchQuery;
//     const nextSearch = this.props.searchQuery;
//     const page = 1;
//     if (prevSearch !== nextSearch) {
//       this.setState({ status: "pending", page: 1 });

//       fetchImg(nextSearch, page)
//         .then((images) => {
//           console.log(images);

//           if (images.total === 0) {
//             this.setState({ error: "No any picture", status: "rejected" });
//           } else {
//             console.log(images.hits);

//             this.setState({
//               images: images.hits,
//               status: "resolved",
//               page: 1,
//               searchQuery: nextSearch,
//             });
//           }
//         })
//         .catch((error) => this.setState({ error, status: "rejected" }));
//     }
//   }
//   loadMore = () => {
//     const search = this.state.searchQuery;
//     const page = this.state.page + 1;

//     fetchImg(search, page)
//       .then((images) =>
//         this.setState((prevState) => ({
//           images: [...prevState.images, ...images.hits],
//           page: prevState.page + 1,
//         }))
//       )
//       .then(() => {
//         window.scrollTo({
//           top: document.documentElement.scrollHeight,
//           behavior: "smooth",
//         });
//       })
//       .catch((error) => this.setState({ error }));
//   };
//   modalOpen = (moduleUrl, moduleAlt) => {
//     this.setState({
//       largeImageURL: moduleUrl,
//       alt: moduleAlt,
//     });
//   };
//   modalClose = () => {
//     this.setState({ largeImageURL: "", alt: "" });
//   };

//   render() {
//     const { images, status } = this.state;
//     if (status === "idle") {
//       return <p></p>;
//     }
//     if (status === "pending") {
//       return (
//         <Loader
//           type="Oval"
//           color="#DCB60E"
//           height={60}
//           width={60}
//           style={{ textAlign: "center", paddingTop: "20px" }}
//         />
//       );
//     }
//     if (status === "resolved") {
//       return (
//         <ul className={css.ImageGallery}>
//           {images.map((image) => {
//             return (
//               <ImageGalleryItem
//                 key={image.id}
//                 tags={image.tags}
//                 webformatURL={image.webformatURL}
//                 largeImageURL={image.largeImageURL}
//                 modalOpen={this.modalOpen}
//               />
//             );
//           })}
//           <Button onClick={this.loadMore} />
//           {this.state.largeImageURL && (
//             <Modal
//               largeImageURL={this.state.largeImageURL}
//               alt={this.state.alt}
//               onClick={this.modalClose}
//             />
//           )}
//         </ul>
//       );
//     }
//     if (status === "rejected") {
//       return (
//         <p className={css.p}>Sorry, "{this.props.searchQuery}" not found</p>
//       );
//     }
//   }
// }
// export default ImageGallery;
// ImageGallery.propTypes = {
//   searchQuery: PropTypes.string.isRequired,
// };
import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import React from "react";
import css from "../../App.module.css";

function ImageGallery({ images, onClick, onItemClick }) {
  const handleOpenModal = (e) => {
    if (e.target !== e.currentTarget) {
      onClick();
    }
  };
  return (
    <ul className={css.ImageGallery} onClick={handleOpenModal}>
      {images.map((image) => (
        <li key={image.id} className={css.ImageGalleryItemImage}>
          <ImageGalleryItem {...image} onItemClick={onItemClick} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
