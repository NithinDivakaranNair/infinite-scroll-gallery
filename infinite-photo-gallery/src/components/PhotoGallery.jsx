import React, { useCallback } from 'react';
import PhotoCard from './PhotoCard';
import { useEffect,useState } from 'react';
import '../PhotoGallery.css';
import Spinner from './Spinner';

const PhotoGallery = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

const[photos,setPhotos]=useState([])
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
const [page, setPage] = useState(1);

const fetchPhotos = useCallback(async () => {
  setLoading(true);
  setError(false);

  try {
    const response = await fetch(
      `https://api.unsplash.com/photos?page=${page}&client_id=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch photos");
    }

    const data = await response.json();
    setPhotos((prev) => [...prev, ...data]);
  } catch (error) {
    console.error(error.message);
    setError(true);
  } finally {
    setLoading(false);
  }
}, [page]);

useEffect(() => {
  fetchPhotos();
}, [fetchPhotos]);

const handleScroll = () => {
  if (
    window.innerHeight + document.documentElement.scrollTop >=
    document.documentElement.offsetHeight - 100
  ) {
    setPage((prev) => prev + 1);
  }
};

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

return (
  <div className="gallery-container">
    {photos.map((photo) => (
      <PhotoCard key={photo.id} photo={photo} />
    ))}
    {loading && <Spinner />}
    {error && <p>Error loading photos. Please try again later.</p>}
  </div>
);
};

export default PhotoGallery;
