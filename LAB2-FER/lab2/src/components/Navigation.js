import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <nav style={{
      backgroundColor: theme.backgroundColor,
      color: theme.color
    }}>
      <ul className='navigation-ul' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <li><a className='active' href='#home'>Home</a></li>
        <li><a href='#gernal' >TV Series</a></li>
        <li><a href='#add'  >Movies</a></li>
        <li><a href='#login'  >Login</a></li>
        <li><a href='#register'  >Register</a></li>
        
        <li><a className='switch-mode' href='#' onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
          }} data-testid="toggle-theme-btn">{!dark ? 'Dark' : 'Light'} mode
        </a>
        </li>
        
      </ul>
    </nav>
  )
}
