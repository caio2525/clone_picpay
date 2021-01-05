import React from 'react';

import {Container, Option, Title, Img} from './styles';

import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';

const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#349beb'
  },

  {
    key: String(Math.random()),
    img: img9,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#b53f99'
  },

  {
    key: String(Math.random()),
    img: img10,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#ebba34'
  },

  {
    key: String(Math.random()),
    img: img11,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#ebeb34'
  },

  {
    key: String(Math.random()),
    img: img12,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#34e5eb'
  },
]

export default function Tips(){
  return(
    <Container>
      {
        items.map((item) => (
          <Option key={item.key} bgColor={item.bgColor}>
            <Title> {item.title} </Title>
            <Img source={item.img}/>
          </Option>
        ))
      }
    </Container>
  )
}
