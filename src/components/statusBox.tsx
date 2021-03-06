import styled from 'styled-components'
import { IStatus } from '../models/status.model';
interface IStatusBox {
   title?: string;
   data?: IStatus;
}

export default function StatusBox( { data }: IStatusBox) {
   return (
      <StatusBoxContainer success={data?.success} >
         <TitleContainer>{data?.title ? data.title.toUpperCase() : ""}</TitleContainer>

         <SuccessContainer success={data?.success}>{data?.success ? "Healthy" : "Error"}</SuccessContainer>

         <MessageContainer>{data?.message && !data.success ? data.message : ""}</MessageContainer>

         <HostnameContainer>{data?.hostname ? data.hostname : ""}</HostnameContainer>

         <TimeContainer>{data?.time ? data.time : ""}</TimeContainer>
      </StatusBoxContainer>
   )
}


const StatusBoxContainer = styled.div<ISuccessContainer>`
   height: 156px;
   padding: 20px 20px;
   background-color: white;
   background-color: ${props => props.success ? "#38CE3399" : "#f0151599"};
   border: solid 1px black;
   text-align: center;
   cursor: default;
`

const TitleContainer = styled.h3`
   font-size: 1.4rem;
   margin-bottom: 6px;
`
interface ISuccessContainer {
   success?: boolean;
}

const SuccessContainer = styled.p<ISuccessContainer>`
   padding: 4px;
   background-color: #00000044;
   margin-bottom: 16px;
`

const MessageContainer = styled.p``

const HostnameContainer = styled.p`
   margin-bottom: 4px;
`

const TimeContainer = styled.p``


