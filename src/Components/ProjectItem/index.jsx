import { CardMedia } from "@mui/material";
import { Box, Typography } from "@mui/material";
import * as styles from "./style";
import { SiDjango, SiVite, SiPostgresql, SiStripe, SiPython
 } from "react-icons/si";


 const iconMap = {
    django: <SiDjango color="white" size={30} />,
    python: <SiPython color="white" size={30} />,
    vite: <SiVite color="white" size={30} />,
    postgresql: <SiPostgresql color="white" size={30} />,
    stripe: <SiStripe color="white" size={30} />,
  };
  


function InfoCard({ data }) {
    if (!data || !data.medias?.[0]?.url) {
        return null; // o un fallback visual
      }

    console.log(data.medias[0].url)
    return (
        <Box sx={{ display: "flex",  alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
           <Box sx={{width:"50%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <Typography variant="h5" color="white">{data.title}</Typography>
            <Typography variant="body1" color="white" sx={{fontSize:{lg:"1rem", xs:"0.8rem"}, textAlign:"center", width:"100%",padding:"1rem"}}>{data.description}</Typography>
            </Box>
            <Box
                sx={{
                        width: "50%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        overflow: "hidden", // por si se anima desde afuera
                        '&:hover .overlay': {
                        opacity: 1,
                        },
                    }}
                >

                   <Box
                    className="overlay"
                    sx={{
                        position: "absolute",
                        width: {lg:"350px", xs:"200px"}, height: {lg:"200px", xs:"150px"},
                        backgroundColor: "rgba(0,0,0,0.6)",
                        zIndex: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap:2,
                        opacity: 0,
                        transition: "opacity 0.3s ease-in-out",
                        borderRadius: "13%",
                        cursor:"pointer"
                    }}
                    >
                    {data.tecnologies.map((i,tecnologie) => iconMap[tecnologie,i])}
               </Box>
            <CardMedia
                component="img"
                src={data.medias[0].url}
                sx={{ ...styles.imageScale, width: {lg:"350px", xs:"200px"}, height: {lg:"200px", xs:"150px"},objectFit:"cover", borderRadius: "13%" }}
                />
            </Box>
        </Box>
    );
}

export default InfoCard;