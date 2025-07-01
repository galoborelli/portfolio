import { Box, Typography, CardMedia, Button } from "@mui/material";
import {TypeAnimation} from "react-type-animation";

function Presentation({media}) {
    return (
        <>
        <Box   sx={{
                height: { lg: "30vh" },
                width: "60%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                marginTop:"2%",
                top: "6%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 2, // asegúrate de que esté por encima del video
            }}>
            <Box sx={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'flex-start', height:'100%', width:'100%',}}>
              <h1 style={{fontSize:"3rem", display: 'inline-block', paddingLeft:'5px'}}>Galo Borelli</h1>
              
       
                <Box sx={{width:{lg:"60%"}, marginTop:"1%"}}>
                <Typography variant="body1" color="white" sx={{ fontSize:{lg:"1rem", xs:"1rem"}, display: 'inline-block', paddingLeft:'5px',    
                }}>
¡ Hola !  Soy Galo, desarrollador web Full Stack e Integrador de Sistemas. Ayudo a equipos a optimizar procesos y desarrollar plataformas web.
He participado tanto en proyectos freelance como proyectos propios que me permitieron aplicar tecnologías como React,Angular,NodeJs, Python, entre otras.
Busco mi primera experiencia en una empresa donde pueda seguir aprendiendo, aportar con responsabilidad y actitud, y desarrollarme como profesional en un equipo de trabajo.
                 </Typography>
                 <Button variant="contained" sx={{fontSize:{lg:"1rem"},marginTop:"3%",paddingY:{lg:"1rem"}, paddingX:{lg:"3rem"}, borderRadius:"70px", backgroundColor:"white", color:"black", fontWeight:"bold",}}>CV</Button>
                </Box>

            </Box>
            <Box sx={{width:{lg:"40%"}, height:{lg:"100%"}, display:"flex", alignItems:"center", justifyContent:"center",marginTop:"6%" }}>
               <Box sx={{width:{lg:"100%"}, height:{lg:"100%"} }}>
               <CardMedia
                component="img"
                src={media[1].url}
                sx={{ width: "100%", height: "100%",objectFit:"cover", borderRadius: "50%" }}
                />
               </Box>
            </Box>  
        </Box>
        <Box sx={{width:"100%", marginTop:"1%", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <TypeAnimation
                sequence={[
                    'Desarrollador web full stack. . .', 
                    1000, 
                    'Entusiasta de la tecnología. . .', 
                    1000, 
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize:"2rem", display: 'inline-block', paddingLeft:'5px' }}
                />
            </Box>
        </>
    )
}

export default Presentation