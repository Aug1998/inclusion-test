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
   position: relative;
   display: flex;
   align-items: center;
   width: 100%;
   height: 70px;
   background-color: #cb997e;
   border-bottom: 1px solid #876654;
   padding: 0 6%;
   z-index: 99;
   h1{
      font-size: 1.8rem;
      margin-right: 10px;
   }
   h3{
      font-size: 1rem;
      font-weight: normal;
      margin-top: 7px;
   }
`