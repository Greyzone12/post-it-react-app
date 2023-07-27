import React, { useRef, useState } from 'react';
import SpotifyPlayer from './SpotifyPlayer';
import { v4 as uuidv4 } from 'uuid';

export const MyPlaylist = () => {
  const urlRef = useRef();
  const favoriteRef = useRef();
  const [playlist, setPlaylist] = useState([
    { id: uuidv4(), url: '33qkK1brpt6t8unIpeM2Oy', favorite: true },
    { id: uuidv4(), url: '0H6TddUF2M63ZSHGvhk5yy', favorite: true },
    { id: uuidv4(), url: '3fn4HfVz5dhmE0PG24rh6h', favorite: true },
    { id: uuidv4(), url: '0DQyTVcDhK9wm0f6RaErWO', favorite: true }
  ]);
  const [mensaje, setMensaje] = useState(null); // Cambio aquí para inicializar con null

  const addSong = () => {
    const url = urlRef.current.value;
    const favorite = favoriteRef.current.checked;

    if (url.trim() === '') {
      console.log('Campos vacios');
      setMensaje('Campos vacios');
      setTimeout(() => {
        setMensaje(null); // Cambio aquí para volver a null y ocultar el mensaje
      }, 3000);
      return;
    }

    const newSong = {
      id: uuidv4(),
      url: url,
      favorite: favorite
    };

    setPlaylist([...playlist, newSong]);
    urlRef.current.value = '';
    favoriteRef.current.checked = false;
  };

  const removeSong = () => {
    setPlaylist(prevPlaylist => prevPlaylist.filter(song => song.favorite));
  };

  const setFavorite = (id) => {
    setPlaylist(prevPlaylist => {
      const newPlaylist = prevPlaylist.map(song =>
        song.id === id ? { ...song, favorite: !song.favorite } : song
      );
      return newPlaylist;
    });
  };

  return (
    <div className='container'>
      <h1 className='title text-center mt-5'>My favorite songs</h1>
      <div className='d-flex align-items-center'>
        <input
          ref={urlRef}
          type='text'
          className='form-control'
          placeholder='Ingrese el codigo del album aqui...'
        ></input>
        <div className='form-check ms-2'>
          <input ref={favoriteRef} className='form-check-input' type='checkbox' />
          <label className='form-check-label'>Favorite</label>
        </div>
        <button className='btn btn-success ms-2' onClick={addSong}>
          <i className='bi bi-plus-circle-fill'></i>
        </button>
        <button className='btn btn-danger ms-2' onClick={removeSong}>
          <i className='bi bi-trash'></i>
        </button>
      </div>
      <div>
        {playlist.map(song => (
          <SpotifyPlayer key={song.id} song={song} setFavorite={setFavorite} />
        ))}
      </div>
      <div className='alert alert-danger mt-2' role='alert' hidden={mensaje === null}>
        {mensaje}
      </div>
    </div>
  );
};
