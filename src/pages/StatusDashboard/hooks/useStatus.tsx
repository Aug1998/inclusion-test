import { useEffect, useState } from 'react'
import axios from 'axios';
import { IStatus, StatusInitialState } from '../../../models/status.model';

export default function useStatus(entity:string) {
   const [status, setStatus] = useState<IStatus>(StatusInitialState)
   const RELOAD_TIME_IN_MILISECONDS = 15000;

   const fetchData = () => {
      axios.get(`https://api.factoryfour.com/${entity}/health/status`)
      .then(function (response) {
         const presentTime = new Date(response.data.time);
         const displayTime = (
            presentTime.toLocaleString('es-AR', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        }));

         const dummyObject:IStatus = {
            title: entity,
            success: response.data.success,
            message: response.data.message,
            hostname: response.data.hostname,
            time: displayTime,
         }
         setStatus(dummyObject);
      })
      .catch(function (error) {
         const dummyObject:IStatus = {
            title: entity,
            success: false,
            message: "403: Forbidden",
            hostname: "",
            time: "",
         }
         setStatus(dummyObject);
      })
   }

   useEffect(() => {
      fetchData()
      setInterval(() => {
         fetchData()
      }, RELOAD_TIME_IN_MILISECONDS);
   }, []);

      

   return status;

}
