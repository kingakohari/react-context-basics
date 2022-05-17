import React from 'react';
import ThemeContext from './ThemeContext';
import {useContext} from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 20px;
  padding: 10px 20px;
  cursor: pointer;
  color: ${props => props.primary ? 'blue' : 'orange'};
  background-color: ${props => props.primary ? 'orange' : 'blue'};
`

function Page() {

    const {theme, toggleTheme} = useContext(ThemeContext)

  return (

    <div className={theme}>
      {
        theme === 'light' ?
        <Button onClick={toggleTheme}>Change Theme</Button> :
        <Button primary onClick={toggleTheme}>Change Theme</Button>
      }
    </div>
  )
}

export default Page
