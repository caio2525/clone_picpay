import React from 'react';
import {Container, Details, Img, Title, Description} from './styles';

import img from '../../images/13.png';

export default function Banner()
{
  return(
    <Container>
      <Details>
        <Title>Cobre um Amigo </Title>
        <Description>Mantenha suas parcelas em dia, use o PicPay para fazer suas cobranças. </Description>
      </Details>
      <Img source={img}/>
    </Container>
  );
}
