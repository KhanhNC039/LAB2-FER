import React from 'react'
import { useState } from 'react'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'


export default function FlimsPresentation({films}) {
     //console.log(films);
     const { theme, toggle, dark } = useContext(ThemeContext)
     const [film, setFilm] = useState([])

    return (
     <div className='grid-container' style={{ backgroundColor: theme.backgroundColor,
      color: theme.color }} >
        {films.map((film)=>
          <div key= {film.id}>
            <div className='column grid-item'>
              <div className='card'>
                <img src={film.img} alt='nice' />
                <h3>{film.title}</h3>
                <p className='title'>{film.year} - {film.nation}</p>

                <button onClick={() => { setFilm(film) }}>
                  <a href='#popup1' style={{
                    backgroundColor: theme.backgroundColor,
                    color: theme.color
                  }} >Detail</a>
                </button>
              </div>
            </div>
          </div>
     )}

      <div id='popup1' className='overlay'>
          <div className='popup'>
            <img src={film.img} />
            <h2>{film.title}</h2>
            <a className='close' href='#'>&times;</a>
            <div className='content'>
              {film.info}
            </div>
          </div>
        </div>
    </div>  
  )

}
