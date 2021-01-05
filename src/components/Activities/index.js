import React from 'react';
import {Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel
} from './styles';
import { Feather, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import avatar from '../../images/avatar.png';

export default function Activities(){
  return(
    <Container>
      <Header>
        <Title> Atividades </Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar}/>
          <Description>
            <Bold> Você </Bold> pagou a <Bold> @mateusSilva </Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName> Caio Fernandes </UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value> R$ 18,00 </Value>

            <Divider/>

            <Feather name="lock" size={24} color="black" />
            <Date> Há 2 anos </Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons name='comment-outline' size={20} color='black'/>
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <Entypo name='heart' size={20} color='green'/>
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>

        </CardFooter>
      </Card>

    </Container>
  )
}
