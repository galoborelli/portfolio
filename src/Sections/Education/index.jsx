
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Typography } from "@mui/material";
import * as styles from "./style";
import axios from "axios";
import EducationItem from "@components/EducationItem/index";

function Education () {
    const [open, setOpen] = useState(true);
    const [education, setEducation] = useState([]);
    useEffect(() => {
        const fetchEducation = async () => {
          try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/education`);
            console.log(response.data);
            setEducation(response.data);
          } catch (error) {
            console.log("Error al cargar educación:", error);
          }
        };
    
        fetchEducation();
      }, []);
    
    if (!education.length) {
      return <div>Cargando...</div>;
    }
    return (
        <>
     <Box sx={{ textAlign: "center", width: "60vw",marginTop:{lg:"6%"} }}>
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
            ...styles.titleHoverScale, // Aplica el estilo de escala aquí
          }}>
              <Typography variant="h3" color="white" sx={{ mr: 3, ...styles.titleHoverScale }}>
            Educación
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
                }}
              >
                {education.map((education, i) => (
                    <EducationItem key={i} data={education} />
                ))}
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
        </>
    )
}


export default Education