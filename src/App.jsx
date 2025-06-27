import { useEffect, useState } from "react";
import axios from "axios";
import { Box, CardMedia } from "@mui/material";
import Presentation from "@sections/Presentation/index";
import Skills from "@components/Skills/index";

function App() {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/media`);
        setMedia(response.data);
      } catch (error) {
        console.log("Error al cargar media:", error);
      }
    };

    fetchMedia();
  }, []);

  if (!media.length) {
    return <div>Cargando...</div>;
  }

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      {/* Fondo de video */}
      <CardMedia
        component="video"
        src={media[2].url}
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      {/* Contenido sobre el video */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Presentation media={media} />
        <Skills />
      </Box>
    </Box>
  );
}

export default App;
