import React from 'react'
import styled from 'styled-components'


interface IStatus {
   success: boolean;
   message: string;
   hostname: string;
   time: string;
}

interface IStatusBox {
   title?: string;
   state?: IStatus;
}

export default function StatusBox( {title = "hola", state }: IStatusBox) {
   return (
      <StatusBoxContainer>
         <TitleContainer>{title}</TitleContainer>

         <SuccessContainer>Success</SuccessContainer>

         <MessageContainer>Mensaje</MessageContainer>

         <HostnameContainer>Hostname</HostnameContainer>

         <TimeContainer>Time</TimeContainer>
      </StatusBoxContainer>
   )
}


const StatusBoxContainer = styled.div`
   width: 210px;
   height: max-content;
   padding: 18px 22px;
   background-color: white;
`

const TitleContainer = styled.h3``

const SuccessContainer = styled.p``

const MessageContainer = styled.p``

const HostnameContainer = styled.p``

const TimeContainer = styled.p``