import { useEffect, useState } from "react";
import axios from "axios";
import { Box, CardMedia } from "@mui/material";
import Presentation from "@sections/Presentation/index";
import Skills from "@components/Skills/index";
import Projects from "@sections/Projects/index";
import Education from "@sections/Education/index";
import Footer from "@sections/Footer/index";
import SideBar from "@components/SideBar/index";
import SoftSkills from "@sections/SoftSkills/index";
import Loader from "@components/Loader/index";

function App() {
  const [media, setMedia] = useState([]);
  const [dataText, setDataText] = useState({});

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [mediaResponse, textResponse] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/api/media`),
          axios.get(`${import.meta.env.VITE_API_URL}/api/data-text`)
        ]);
        console.log(mediaResponse.data, "mediaResponse.data");
        setMedia(mediaResponse.data);
        setDataText(textResponse.data); // ahora es objeto, no array
      } catch (error) {
        console.log("Error al cargar datos:", error);
      }
    };
  
    fetchAll();
  }, []);

   if (!media.length || Object.keys(dataText).length === 0) {
     return <Loader />;
   }

  return (
    <>
      {/* Fondo de video */}
      <Box>
        {media[2] && (
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
              zIndex: -2,
              overflow:"hidden"
            }}
          />
        )}
        {/* Overlay encima del video */}
        <Box sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1
        }} />
      </Box>

      {/* Contenido sobre el video */}
      <Box sx={{
        position: "relative",
        zIndex: 1,
        width: "90vw",
        display: "flex",
        flexDirection:"column",
        alignItems: "center",
        justifyContent: "center",
        left:{xs:"3%",lg:"4%"},
        overflow:"hidden"
      }}>
        <SideBar data={dataText.sidebar} />
        <Presentation media={media} data={dataText.presentation} />
        <Box sx={{ marginTop:"6%"}}>
          <Skills data={dataText.skills} />
        </Box>
        <SoftSkills data={dataText.soft_skills} />
        <Projects data={dataText.projects} />
        <Education data={dataText.education} />
        <Footer data={dataText.contact} />
      </Box>
    </>
  );
}

export default App;