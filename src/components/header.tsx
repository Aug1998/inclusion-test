import styled from "styled-components"

export default function Header() {
  return (
    <HeaderContainer>
      <h1>Status Dashboard</h1>
      <h3>by Augusto Pruvost</h3>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   height: 76px;
   background-color: #cb997e;
   padding: 0 6%;
   h1{
      font-size: 1.9rem;
      margin-bottom: 7px;
      margin-right: 10px;
   }
   h3{
      font-size: 1rem;
      font-weight: normal;
   }
`