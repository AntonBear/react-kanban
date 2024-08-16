import styled from 'styled-components'

export const Button = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  &:hover {
    background-color: #33399b;
  }

  a {
    color: #ffffff;
    text-decoration: none; // Убираем подчеркивание ссылки
  }
`
