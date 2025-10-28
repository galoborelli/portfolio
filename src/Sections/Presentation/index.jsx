import { Box, Typography, CardMedia, Button } from "@mui/material";
import { TypeAnimation } from "react-type-animation";


function Presentation({ media , data}) {

  return (
    <Box
  id="inicio"
  sx={{
    position: "relative", // <-- CAMBIAR ESTO
    height: { lg: "auto", xs: "auto" }, // <-- usar altura automática
    width: { lg: "60%", xs: "90%" },
    display: "flex",
    flexDirection: { lg: "row", xs: "column" },
    alignItems: "center",
    justifyContent: "center",
    margin: "auto", // centrado horizontal
    marginTop: { lg: "10%", xs: "10%" }, // deja espacio arriba
    marginBottom: { lg: "1%", xs: "10%" }, // deja espacio abajo
    zIndex: 2,
    gap: 2,
  }}
>
      {/* Imagen: primero en mobile, segundo en desktop */}
      <Box
        sx={{
          order: { xs: 1, lg: 2 },
          width: { lg: "40%", xs: "100%" },
          height: { lg: "100%", xs: "200px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        
        <CardMedia
          component="img"
          src={media[7].url}
          sx={{
            width: { lg: "350px", xs: "200px" },
            height: { lg: "350px", xs: "200px" },
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </Box>

      {/* Contenido textual */}
      <Box
        sx={{
          order: { xs: 2, lg: 1 },
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", lg: "flex-start" },
          justifyContent: "center",
          width: "100%",
          textAlign: { xs: "center", lg: "left" },
        }}
      >
        {/* Nombre */}
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "2rem", lg: "4rem" }, mb: 1 , color:"white"}}
        >
          {data.title_section}
        </Typography>

        {/* Animación */}
        <TypeAnimation
          sequence={[
            "Desarrollador web full stack",
            1000,
            "Entusiasta de la tecnología ",
            1000,
        
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize:  "1.5rem" , display: "inline-block", color:"white" , width:"100%"}}
       
        />

        {/* Perfil + botón */}
        <Box
          sx={{
            width: { lg: "85%", xs: "100%" },
            mt: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", lg: "flex-start" },
          }}
        >
          <Typography
            variant="body1"
            color="white"
            sx={{
              fontSize: { lg: "1.2rem", xs: "0.9rem" },
              mb: 2,
              whiteSpace:"pre-line"
            }}
          >
           {data.content.description}
          </Typography>

          <Button
            variant="contained"
            sx={{
              fontSize: { lg: "1rem", xs: "0.9rem" },
              mt: 2,
              py: { lg: "1rem", xs: "0.6rem" },
              px: { lg: "3rem", xs: "2rem" },
              borderRadius: "70px",
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
            }}
          >
            {data.button_text}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Presentation;
