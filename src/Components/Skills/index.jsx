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
  SiBootstrap,
  SiPostgresql
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
    { icon: SiBootstrap, color: "#ffffff", label: "Bootstrap" },
    { icon: SiPostgresql, color: "#ffffff", label: "PostgreSQL" },
      ];

  return (
    <Box
      id="skills"
      sx={{
        textAlign: "center",
        width: { xs: "100%", md: "80%", lg: "60vw" },
        height: { lg: "300px", xs: "auto" },
        marginTop: { lg: "15%", xs: "59%" },
        marginBottom: { lg: "6%", },
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
            
          }}
        >
          <Typography
            variant="h3"
            color="white"
            sx={{ mr: 3, display: "inline-block" }}
          >
            Habilidades
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
              display: { xs: "grid", lg: "flex" },
              gridTemplateColumns: { xs: "repeat(4, 1fr)" },
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              px: 2,
              py: { lg: 16, xs: 0 },
              marginTop:{xs:"20%", lg:"0%"}
            }}
          >
          {icons.map(({ icon: Icon, color, label }, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
      <IconButton sx={{ ...styles.iconHoverScale }}>
      <Icon size={{ lg: 40, xs: 20 }} color={color} />
      </IconButton>
      <Typography variant="body2" color="white" sx={{ fontSize: "0.75rem" }}>
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
