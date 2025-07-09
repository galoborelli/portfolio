
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
       <Box
           sx={{
             textAlign: "center",
             width: { xs: "89%", md: "80%", lg: "60vw" },
             minHeight: { lg: "auto", xs: "auto" },
             marginTop: { lg: "6%", xs: "35%" },
             marginBottom: { xs: "20%", md: "10%" }, // 💥 esto es nuevo
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
                 ...styles.titleHoverScale,
               }}
             >
               <Typography
                 variant="h3"
                 color="white"
                 sx={{ mr: 3, ...styles.titleHoverScale }}
               >
                 Educacion
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
                display: { xs: "flex", lg: "flex" },
                flexDirection: { xs: "column", lg: "row" },
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