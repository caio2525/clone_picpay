import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 16,
  }
}))`
  height: 130px;
  backgroundColor: #36ba59;
`;

export const Option = styled.TouchableOpacity`
  width: 80px;
  margin-right: 16px;
  align-items: center;
`

export const Img = styled.Image``

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-top: 16px;
`
