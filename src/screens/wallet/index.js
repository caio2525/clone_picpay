import React from 'react';
import {Switch} from 'react-native';
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
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethod,
  PaymentMethodTitle,
  Card,
  CardDetail,
  CardTitle,
  CardInfo,
  Img,
  CardBody,
  CardFooter,
  CardLabel
} from './styles'

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

import creditCard from '../../images/credit-card.png';

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

        <UseBalance>
          <UseBalanceTitle>Usar Saldo ao pagar</UseBalanceTitle>
          <Switch />
        </UseBalance>

        <PaymentMethod>
          <PaymentMethodTitle>
            Formas de Pagamento
          </PaymentMethodTitle>

          <Card>
            <CardBody>
              <CardDetail>
                <CardTitle>
                  Cadastre seu cartão de crédito
                </CardTitle>

                <CardInfo>
                  Cadastre seu cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay.
                </CardInfo>

              </CardDetail>

              <Img source={creditCard} resizeMode='contain'/>
            </CardBody>

            <CardFooter>
              <AntDesign name="pluscircleo" size={30} color="#0DB060" />
              <CardLabel>Adicionar cartão de crédito</CardLabel>
            </CardFooter>
          </Card>

        </PaymentMethod>

      </Wrapper>

  )
}
