import React from 'react'
import {
    RiPaypallFill,
  RiSnapchatFill,
  RiSkypeFill,
  RiFacebookFill,
  RiInstagramFill,
  IconType,
} from 'react-icons/ri'

// Definir a interface para os itens de ícone
interface IconItem {
  path: string
  name: IconType
}

export default function Socials() {
  // Definir os ícones usando a interface IconItem
  const icons: IconItem[] = [
    {
      path: '/',
      name: RiPaypallFill,
    },
    {
      path: '/',
      name: RiSnapchatFill,
    },
    {
      path: '/',
      name: RiSkypeFill,
    },
    {
      path: '/',
      name: RiFacebookFill,
    },
    {
      path: '/',
      name: RiInstagramFill,
    },
  ]

  return (
    <div>
      <h1>socials</h1>
     <div className=''></div>
      </div>
  )
}
