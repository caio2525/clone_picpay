import React from 'react';
import {View, Text} from 'react-native';
import {Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel
} from './styles'

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

export default function wallet() {
  return(

      <Wrapper>
        <Header colors={['#52E7BC', '#1Ab563']}>
          <HeaderContainer>

            <Title> Saldo PicPay </Title>

            <BalanceContainer>
              <Value>R$<Bold> 0,00</Bold> </Value>
              <EyeButton>
                <Feather name='eye' size={28} color="#fff"/>
              </EyeButton>
            </BalanceContainer>
            <Info> Seu Saldo está rendendo 100% do CDI </Info>

            <Actions>
              <Action>
                <MaterialCommunityIcons name="cash" size={20} color="#fff"/>
                <ActionLabel> Adicionar </ActionLabel>
              </Action>

              <Action>
                <FontAwesome name="bank" size={20} color="#fff"/>
                <ActionLabel> Adicionar </ActionLabel>
              </Action>

            </Actions>

          </HeaderContainer>
        </Header>
      </Wrapper>

  )
}
