import { useEffect, useState } from "react";
import axios from "axios";
import { Box, CardMedia } from "@mui/material";
import Presentation from "@sections/Presentation/index";
import Skills from "@components/Skills/index";
import Projects from "@sections/Projects/index";

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
    <>
      {/* Fondo de video */}
    <Box>
      <CardMedia
        component="video"
        src={media[2].url}
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          overflow:"hidden"
        }}
      />
    </Box>
      {/* Contenido sobre el video */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "90vw",
          display: "flex",
          flexDirection:"column",
          alignItems: "center",
          justifyContent: "center",
          overflow:"hidden"
        }}
      >
        <Box sx={{height:"500px"}}>
        <Presentation media={media} />
        </Box>

        <Box sx={{ marginTop:"6%"}}>
        <Skills />
        </Box>
        
        <Box>
          <Projects  />
        </Box>
      </Box>
   </>
  );
}

export default App;
