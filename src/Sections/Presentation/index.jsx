import { Box, Typography, CardMedia, Button } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

function Presentation({ media }) {
  return (
    <Box
      sx={{
        height: { lg: "30vh", xs: "100vh" },
        width: { lg: "60%", xs: "90%" },
        display: "flex",
        flexDirection: { lg: "row", xs: "column" },
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: { lg: "6%", xs: "5%" },
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 2,
        gap: 2,
        marginBottom: { lg: "15%", xs: "20%" },
        marginTop: { lg: "5%", xs: "5%" },
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
          src={media[1].url}
          sx={{
            width: { lg: "100%", xs: "200px" },
            height: { lg: "100%", xs: "200px" },
            objectFit: "cover",
            borderRadius: "70%",
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
          sx={{ fontSize: { xs: "2rem", lg: "3rem" }, mb: 1 }}
        >
          Galo Borelli
        </Typography>

        {/* Animación */}
        <TypeAnimation
          sequence={[
            "Desarrollador web full stack . . .",
            1000,
            "Entusiasta de la tecnología . . .",
            1000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "1.5rem", display: "inline-block" }}
        />

        {/* Perfil + botón */}
        <Box
          sx={{
            width: { lg: "60%", xs: "100%" },
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
              fontSize: { lg: "1rem", xs: "0.9rem" },
              mb: 2,
            }}
          >
            ¡Hola! Soy Galo, desarrollador web Full Stack e integrador de
            sistemas. He trabajado en proyectos freelance y personales aplicando
            tecnologías como React, Angular, Node.js y Python. Busco mi primera
            experiencia en una empresa donde crecer, aportar con actitud y seguir
            desarrollándome profesionalmente.
          </Typography>

          <Button
            variant="contained"
            sx={{
              fontSize: { lg: "1rem", xs: "0.9rem" },
              py: { lg: "1rem", xs: "0.6rem" },
              px: { lg: "3rem", xs: "2rem" },
              borderRadius: "70px",
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
            }}
          >
            CV
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Presentation;
