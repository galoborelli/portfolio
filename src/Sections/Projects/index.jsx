import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import ProjectItem from "@components/ProjectItem/index";


import {
    SiReact,
    SiAngular,
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiPython,
    SiDjango,
    SiMongodb,
    SiStripe,
    SiGnubash,
    SiGithub,
  } from "react-icons/si";


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
    

    // const icons = [
    //     { icon: SiReact, color: "#61dafb", label: "React" },
    //     { icon: SiAngular, color: "#dd0031", label: "Angular" },
    //     { icon: SiJavascript, color: "#f7df1e", label: "JavaScript" },
    //     { icon: SiTypescript, color: "#007acc", label: "TypeScript" },
    //     { icon: SiNodedotjs, color: "#339933", label: "Node.js" },
    //     { icon: SiPython, color: "#3776ab", label: "Python" },
    //     { icon: SiDjango, color: "#092e20", label: "Django" },
    //     { icon: SiMongodb, color: "#47A248", label: "MongoDB" },
    //     { icon: SiStripe, color: "#635bff", label: "Stripe" },
    //     { icon: SiGnubash, color: "#4eaa25", label: "Terminal" },
    //     { icon: SiGithub, color: "#ffffff", label: "GitHub" },
    //   ];

if(!projects.length){
    return <div>Cargando...</div>;
}

    return (
        <>
         <Box sx={{ textAlign: "center", width: "60vw",height:"500px",marginTop:{lg:"6%"} }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            mb: 4,
          }}
          onClick={() => setOpen(!open)}
        >
           {/* Aplicar el estilo de escala a las flechas */}
           <Box sx={{
            display: 'inline-block', // Necesario para la transformación
            width: "100%",
            textAlign:"center",   
            margin:"auto",
            borderBottom: "1px solid white",
            ...titleHoverScale, // Aplica el estilo de escala aquí
          }}>
              <Typography variant="h3" color="white" sx={{ mr: 3, ...titleHoverScale }}>
            Proyectos
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
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 4,
                  px: 2,
                  py:2,
                  margin: "2rem auto",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  backdropFilter: "blur(8px)",
                  padding: "2rem",
                  flexDirection: "column",
                }}
              >
                {projects.map((project, i) => (
                    <ProjectItem key={i} data={project} />
                ))}
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
  </>
    );
}

export default Projects;
