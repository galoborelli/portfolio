
import * as styles from "./styles";
import { Typography,Box } from "@mui/material";
import {SiGmail} from "react-icons/si";
import { IoPhonePortraitOutline } from "react-icons/io5";

function Footer() {
  return (
    <>
    <Box sx={{width:"100%", minHeight:"160px", height:"auto",display:"flex",justifyContent:"center",alignItems:"center",gap:2}}>
    <Typography variant="h6" color="white">
            Contacto:
          </Typography>
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:2, px:2}}>
          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <SiGmail size={22}/>
          <Typography variant="body1" color="white" sx={{px:2}}>
            borelligalo19@gmail.com
          </Typography>
          </Box>
          <Typography variant="body1" color="white">
           <IoPhonePortraitOutline size={22}/>
            +34 611 85 60 50
          </Typography>
        </Box>
    </Box>
    </>
    )
}

export default Footer