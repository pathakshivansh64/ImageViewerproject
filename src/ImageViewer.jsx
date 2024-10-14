import React, { useState } from 'react';
import './ImageViewer.css';

const images = [
'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=400',
'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400',
'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400',
'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400',
'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400',
'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400',
'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400',
'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?w=400',
'https://images.unsplash.com/photo-1444090542259-0af8fa96557e?w=400',
'https://images.pexels.com/photos/34950/pexels-photo.jpg?w=400',
'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?w=400',
'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?w=400',
'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?w=400',
'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?w=400',
'https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?w=400',
'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?w=400',
'https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?w=400',
'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?w=400',
'https://images.pexels.com/photos/1188477/pexels-photo-1188477.jpeg?w=400',
'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400',
'https://images.unsplash.com/photo-1444090542259-0af8fa96557e?w=400',
'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400',
'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400',
'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
'https://images.unsplash.com/photo-1472417583565-62e7bdeda490?w=400',
'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400',
'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400',
'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400',
'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400',
'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400',
'https://images.unsplash.com/photo-1472417583565-62e7bdeda490?w=400',
'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400',
'https://images.unsplash.com/photo-1444090542259-0af8fa96557e?w=400',
'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400',




];

const ImageViewer = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState('normal');
 
  
  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="image-viewer-container">
      <div className="main-image">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className={`image ${filter}`}
        />
      </div>
      
      <div className="file-info-bar">
        <span>Files selected: {currentImageIndex+1} / {images.length} Files</span>
        <select className="filter-dropdown" onChange={handleFilterChange}>
          <option value="normal">Do not Filter</option>
          <option value="black-and-white">Black and White</option>
          <option value="sepia">Sepia</option>
        </select>
        <select className="filter-dropdown" onChange={handleFilterChange}>
          <option value="all">ALL</option>
          <option value="images">Images</option>
        </select>
      </div>

      <div className="thumbnail-bar">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageViewer;
