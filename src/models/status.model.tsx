export interface IStatus {
   title: string;
   success: boolean;
   message: string;
   hostname: string;
   time: string;
}

export const StatusInitialState: IStatus = {
   title: "",
   success: false,
   message: "",
   hostname: "",
   time: "",
}
