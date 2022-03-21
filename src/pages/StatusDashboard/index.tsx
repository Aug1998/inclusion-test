import styled from "styled-components"
import StatusBox from "../../components/statusBox"
import useStatus from "./hooks/useStatus"

export default function StatusDashboard() {
   const accountStatus = useStatus("accounts");
   const assetsStatus = useStatus("assets");
   const customersStatus = useStatus("customers");
   const datapointsStatus = useStatus("datapoints");
   const devicesStatus = useStatus("devices");
   const documentsStatus = useStatus("documents");
   const formsStatus = useStatus("forms");
   const invitesStatus = useStatus("invites");
   const mediaStatus = useStatus("media");
   const messagesStatus = useStatus("messages");
   const namespacesStatus = useStatus("namespaces");
   const ordersStatus = useStatus("orders");
   const patientsStatus = useStatus("patients");
   const relationshipsStatus = useStatus("relationships");
   const rulesStatus = useStatus("rules");
   const templatesStatus = useStatus("templates");
   const usersStatus = useStatus("users");
   const workflowsStatus = useStatus("workflows");

  return (
    <StatusDashboardContainer>
       <StatusBox data={accountStatus}></StatusBox>
       <StatusBox data={assetsStatus}></StatusBox>
       <StatusBox data={customersStatus}></StatusBox>
       <StatusBox data={datapointsStatus}></StatusBox>
       <StatusBox data={devicesStatus}></StatusBox>
       <StatusBox data={documentsStatus}></StatusBox>
       <StatusBox data={formsStatus}></StatusBox>
       <StatusBox data={invitesStatus}></StatusBox>
       <StatusBox data={mediaStatus}></StatusBox>
       <StatusBox data={messagesStatus}></StatusBox>
       <StatusBox data={namespacesStatus}></StatusBox>
       <StatusBox data={ordersStatus}></StatusBox>
       <StatusBox data={patientsStatus}></StatusBox>
       <StatusBox data={relationshipsStatus}></StatusBox>
       <StatusBox data={rulesStatus}></StatusBox>
       <StatusBox data={templatesStatus}></StatusBox>
       <StatusBox data={usersStatus}></StatusBox>
       <StatusBox data={workflowsStatus}></StatusBox>
    </StatusDashboardContainer>
  )
}

const StatusDashboardContainer = styled.div`
   width: 100%;
   height: calc(100vh - 76px);
   overflow-y: scroll;
   background-color: #ffe8d6;
   padding: 40px 6%;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
   grid-template-rows: auto;
   grid-column-gap: 24px;
   grid-row-gap: 24px;
`

