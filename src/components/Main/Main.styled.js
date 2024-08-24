import { styled } from 'styled-components'

export const Main_container = styled.main`
  width: 100%;
  background-color: ${(props) => props.theme.main.backgroundColor};
`

export const Main_block = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`

export const Main__content = styled.div`
  width: 100%;
  display: flex;
`
