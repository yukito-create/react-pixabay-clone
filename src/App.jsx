import { useState, useRef } from 'react'
import './App.css'
import ImageGallery from './ImageGallery'

function App() {

  const [fetchDate, setfetchDate] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const endpointURL = `https://pixabay.com/api/?key=51193667-9af8a8e6906f149b6a0df9f2c&q=${ref.current.value}&image_type=photo`;

    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setfetchDate(data.hits);
      });
  };

  return (
    <div className='container'>
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='画像を探す' ref={ref} />
      </form>
      <ImageGallery fetchData={fetchDate} />
    </div>
  )
}

export default App
