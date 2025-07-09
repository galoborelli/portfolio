import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import ProjectItem from "@components/ProjectItem/index";


const titleHoverScale = {
    display: 'inline-block', 
    transition: 'transform 0.3s ease-in-out', 
    '&:hover': {
      transform: 'scale(1.10)', 
  },
}


function Projects() {
    const [open, setOpen] = useState(true);
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const fetchProjects = async () => {
          try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects`);
            console.log(response.data);
            setProjects(response.data);
          } catch (error) {
            console.log("Error al cargar proyectos:", error);
          }
        };
    
        fetchProjects();
      }, []);
    

if(!projects.length){
    return <div>Cargando...</div>;
}

    return (
        <>
      <Box
      id="projects"
      sx={{
        textAlign: "center",
        width: { xs: "90%", md: "80%", lg: "60vw" },
        height: { lg: "auto", xs: "auto" },
        marginTop: { lg: "6%", xs: "30%" },
        mx: "auto",
        px: { xs: 2, md: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => setOpen(!open)}
      >
        <Box
          sx={{
            display: "inline-block",
            width: "100%",
            textAlign: "center",
            margin: "auto",
            borderBottom: "1px solid white",
            marginBottom: "1rem",
            ...titleHoverScale,
          }}
        >
          <Typography
            variant="h3"
            color="white"
            sx={{ mr: 3, ...titleHoverScale }}
          >
            Projectos
          </Typography>

          {open ? (
            <MdKeyboardArrowUp size={40} color="white" />
          ) : (
            <MdKeyboardArrowDown size={40} color="white" />
          )}
        </Box>
      </Box>


  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
      
          {projects.map((project, i) => (
        <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          
          gap: 4,
          px: 2,
          py: 2,
          margin: "0 auto",
          marginTop:"4rem",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          backdropFilter: "blur(8px)",
          flexDirection: "column", // siempre en columna para evitar mezcla
        }}
      >
      <ProjectItem key={i} data={project} />
            </Box>
       ))}
       
      </motion.div>
    )}
  </AnimatePresence>
</Box>
  </>
    );
}

export default Projects;
