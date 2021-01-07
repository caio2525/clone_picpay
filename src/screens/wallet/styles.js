import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight + 5

export const Wrapper = styled.View`
  flex: 1;
  background: #cdd1ce;
`

export const Header = styled(LinearGradient)`
  height: 300px;
`

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  paddingTop: ${`${statusBarHeight}px`};
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`

export const BalanceContainer = styled.View`
  margin: 10px 0px;
  flex-direction: row;
  align-items: center
`


export const Value = styled.Text`
  font-size: 38px;
  color: #fff;
  font-weight: 200;
`

export const Bold = styled.Text`
  font-weight: bold;
`
export const EyeButton = styled.TouchableOpacity`
  margin-left: 5px;
`
export const Info = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`
export const Actions = styled.View`
  flex-direction: row;
  margin-top: 40px;
`

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.6);
  width: 150px;
  height: 45px;
  border-radius: 25px;
  margin: 0 10px;

`

export const ActionLabel = styled.Text`
  font-size: 16px;
  margin-left: 5px
  color: #fff;
`
