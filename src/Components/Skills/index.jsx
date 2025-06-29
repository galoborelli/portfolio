import { Box, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as styles from "./styles";

import {
  SiReact,
  SiAngular,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiMongodb,
  SiStripe,
  SiTypescript,
  SiGithub,
  SiGnubash,
} from "react-icons/si";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";


function Skills() {
  const [open, setOpen] = useState(true);

  const icons = [
    { icon: SiReact, color: "#61dafb", label: "React" },
    { icon: SiAngular, color: "#dd0031", label: "Angular" },
    { icon: SiJavascript, color: "#f7df1e", label: "JavaScript" },
    { icon: SiTypescript, color: "#007acc", label: "TypeScript" },
    { icon: SiNodedotjs, color: "#339933", label: "Node.js" },
    { icon: SiPython, color: "#3776ab", label: "Python" },
    { icon: SiDjango, color: "#092e20", label: "Django" },
    { icon: SiMongodb, color: "#47A248", label: "MongoDB" },
    { icon: SiStripe, color: "#635bff", label: "Stripe" },
    { icon: SiGnubash, color: "#4eaa25", label: "Terminal" },
    { icon: SiGithub, color: "#ffffff", label: "GitHub" },
  ];

  return (
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
          ...styles.titleHoverScale, // Aplica el estilo de escala aquí
        }}>
            <Typography variant="h3" color="white" sx={{ mr: 3, ...styles.titleHoverScale }}>
          Habilidades
        </Typography>

          {open ? (
            <MdKeyboardArrowUp size={40} color="white" />
          ) : (
            <MdKeyboardArrowDown size={40} color="white" />
          )}
        </Box>
        
      </Box>

      {/* <Box
        sx={{
          width: "100%",
          textAlign:"center",   
          margin:"auto",
          borderBottom: "1px solid white",
          mb: 4,
        }}
      /> */}

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
              {icons.map(({ icon: Icon, color, label }, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <IconButton sx={{ ...styles.titleHoverScale }}>
                    <Icon size={60} color={color} />
                  </IconButton>
                  <Typography variant="body2" color="white">
                    {label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default Skills;