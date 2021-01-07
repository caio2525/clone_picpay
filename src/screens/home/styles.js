import styled from 'styled-components/native';
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight + 5
const teste = 29;

export const Wrapper = styled.SafeAreaView`
  backgroundColor: #cdd1ce;
  flex: 1;
  paddingTop: ${`${statusBarHeight}px`};
`

export const Container = styled.ScrollView``

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const BalanceContainer = styled.View`

`
export const BalanceTitle = styled.Text`
text-align: center;
font-size: 14px;
`
export const Balance = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`
