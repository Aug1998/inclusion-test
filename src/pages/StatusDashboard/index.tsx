import styled from "styled-components"
import StatusBox from "../../components/statusBox"

export default function StatusDashboard() {

  return (
    <StatusDashboardContainer>
         <StatusBox title="asd"></StatusBox>
         <StatusBox ></StatusBox>
         <StatusBox title=""></StatusBox>
         <StatusBox title=""></StatusBox>
         <StatusBox title=""></StatusBox>
         <StatusBox title=""></StatusBox>
         <StatusBox title=""></StatusBox>
         <StatusBox title=""></StatusBox>
         <StatusBox title=""></StatusBox>
         <StatusBox title=""></StatusBox>
         <StatusBox title=""></StatusBox>
         <StatusBox title=""></StatusBox>
         <StatusBox title=""></StatusBox>
         <StatusBox title=""></StatusBox>
         <StatusBox title=""></StatusBox>
         <StatusBox title=""></StatusBox>
         <StatusBox title=""></StatusBox>
         <StatusBox title=""></StatusBox>
         <StatusBox title=""></StatusBox>
    </StatusDashboardContainer>
  )
}

const StatusDashboardContainer = styled.div`
   width: 100%;
   height: calc(100vh - 76px);
   overflow-y: scroll;
   background-color: #ffe8d6;
   padding: 50px 6%;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
   grid-template-rows: auto;
`

