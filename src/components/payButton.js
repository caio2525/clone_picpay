import React from 'react';
import {Button, Label} from './styled';
import {MaterialIcons} from '@expo/vector-icons';
import {TouchableWithoutFeedback} from 'react-native';

export default function PayButton({onPress, focused}){
  return(
    <TouchableWithoutFeedback
      onPress={() => onPress()}
    >
      <Button
        colors={
          focused
          ?['#161a17', '#1c211d']
          :['#00fc6c', '#00ac4a']}
        start={[1, 0.2]}
      >
        <MaterialIcons name='attach-money' color='#fff' size={30}/>
        <Label> Pay </Label>
      </Button>
    </TouchableWithoutFeedback>


  )
}
