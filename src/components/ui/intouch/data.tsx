//  import {emaill location and time icons}
import { TiMail } from "react-icons/ti";
import { FaMapPin } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

interface socialContact{
  icon: React.ReactNode;
  label:string
  value:string
}



export const socialContact:socialContact[] = [
  {
    icon: <TiMail />,
    label: "Email",
    value: "Akinladejohn300@gmail.com",
  },
  
  {
    icon: <FaMapPin />,
    label: "Location",
    value: "Ayobo,Lagos state, Nigeria",
  },
  {
    icon: <MdAccessTime />,
    label: "Response Time",
    value: "Within 24 hours",
  },
];