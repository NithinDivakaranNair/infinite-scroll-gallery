import React from 'react'
import '../PhotoCard.css'

const PhotoCard = ({photo}) => {
  return (
    <div className='photo-card'> 
        <img  className='photo' src={photo.urls.small}  
        alt={photo.alt_description || "Unsplash Photo"}
        loading="lazy"
        />
        <p className='photographer'>Photo by {photo.user.name}</p>
    </div>
  )
}

export default PhotoCard