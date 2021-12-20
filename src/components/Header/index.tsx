import React, { useState } from 'react'

import Logo from '../../assets/Group.svg'
import Search from '../../assets/Search.svg'
import ShoppingCart from '../../assets/ShoppingCart.svg'
import HamburguerMenu from '../../assets/HamburguerMenu.svg'

import {
  Container,
  DivLogo,
  DivMenu,
  MenuMobile,
  DivContainer,
  DivIcon
} from './styles'

const Header: React.FC = () => {
  const [menu] = useState([
    {
      title: 'Sobre a Verizon',
      link: '#'
    },
    {
      title: 'Produtos & Serviços',
      link: '#'
    },
    {
      title: 'Loja online',
      link: '#'
    },
    {
      title: 'Ajuda',
      link: '#'
    },
    {
      title: (
        <DivIcon>
          <ShoppingCart />
        </DivIcon>
      ),
      link: '#'
    },
    {
      title: (
        <DivIcon>
          <Search />
        </DivIcon>
      ),
      link: '#'
    }
  ])
  return (
    <Container>
      <DivContainer>
        <DivLogo>
          <Logo />
        </DivLogo>

        <DivMenu>
          {menu.map((item, index) => (
            <div key={index}>
              <a href={item.link}>
                <span>{item.title}</span>
              </a>
            </div>
          ))}
        </DivMenu>

        <MenuMobile>
          <Search />
          <HamburguerMenu />
        </MenuMobile>
      </DivContainer>
    </Container>
  )
}

export default Header
