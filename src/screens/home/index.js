import React from 'react';
import {Text} from 'react-native';
import {Wrapper, Container, Header, BalanceContainer, Balance, BalanceTitle} from './styles';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Sugestions from '../../components/Sugestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

export default function home() {
  return(
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="black" />
          <BalanceContainer>
            <BalanceTitle> Meu Saldo </BalanceTitle>
            <Balance> R$ 0,00 </Balance>
          </BalanceContainer>
          <AntDesign name="adduser" size={30} color="black" />
        </Header>

        <Sugestions> </Sugestions>
        <Activities/>
        <Tips/>
        <Banner/>

      </Container>
    </Wrapper>
  )
}
