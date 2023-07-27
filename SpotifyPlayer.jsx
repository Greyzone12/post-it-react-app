import React from 'react';

const SpotifyPlayer = ({ url, favorite, setFavorite }) => {
  const urlSong = "https://open.spotify.com/embed/album/" + url;

  const toggleFavorite = () => {
    setFavorite(url); // Pasamos la url en lugar del id ya que no tenemos acceso directo al id en este componente
  };

  if (favorite) {
    return (
      <div className="d-flex my-5" width="1000px">
        <iframe src={urlSong} width="100%" height="80" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        <button className="btn" onClick={toggleFavorite}>
          <i className="bi bi-star-fill"></i>
        </button>
      </div>
    );
  } else {
    return (
      <div className="d-flex my-5" width="1000px">
        <iframe src={urlSong} width="100%" height="80" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        <button className="btn" onClick={toggleFavorite}>
          <i className="bi bi-star"></i>
        </button>
      </div>
    );
  }
};

export default SpotifyPlayer;
