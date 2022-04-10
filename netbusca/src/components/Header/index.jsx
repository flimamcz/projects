import React from 'react'
import Logo from '../../assets/logo.svg'
import { HeaderContainer, Container, Button } from './style'

const Header = ({text}) => {
  return (
      <HeaderContainer>
          <Container>
              <div className='logo'>
                  <a href=""><img src={Logo} alt={text} /></a>
              </div>

              <div>
                  <Button className='button'>{text}</Button>
              </div>
          </Container>
      </HeaderContainer>
  )
}

export default Header