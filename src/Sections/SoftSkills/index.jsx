import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import {
  RocketLaunch,
  School,
  Group,
  Favorite,
  Build,
  Psychology,
  Hearing
} from "@mui/icons-material";

const softSkills = [
  { titulo: "Proactividad", descripcion: "Tomo la iniciativa en buscar información, leer documentación y guiarme por mis propios medios para enfrentar desafíos y encontrar soluciones efectivas.", icon: RocketLaunch },
  { titulo: "Aprendizaje Continuo", descripcion: "Continuamente intento formarme y profundizar en los temas que ya conozco.", icon: School },
  { titulo: "Trabajo en Equipo", descripcion: "Disfruto trabajar en grupo y facilito la comunicación entre las personas para llegar a un objetivo común.", icon: Group },
  { titulo: "Empatía", descripcion: "Intento interpretar las situaciones personales al momento de trabajar.", icon: Favorite },
  { titulo: "Resolución de Problemas", descripcion: "Busco soluciones de calidad, utilizando la menor cantidad de recursos y de forma ordenada.", icon: Build },
  { titulo: "Pensamiento Crítico", descripcion: "Pienso los problemas desde distintos puntos de vista y evalúo diferentes escenarios para buscar respuestas.", icon: Psychology },
  { titulo: "Escucha Activa", descripcion: "Escucho las diferentes opiniones durante los debates y las considero al momento de llegar a una conclusión.", icon: Hearing }
];

function SoftSkills() {
  const [open, setOpen] = useState(true);

  return (
    <Box
      id="softskills"
      sx={{
        width: "100%",
        maxWidth: 1200,
        mx: "auto",
        //px: { xs: 2, md: 0 },
        mt: { xs: 6, md: 10 },
        mb: { xs: 6, md: 12 }
      }}
    >
      {/* HEADER (accessible) */}
      <Box
        component="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        sx={{
          all: "unset",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          pb: 2,
          //borderBottom: "1px solid rgb(255, 255, 255)"
        }}
      >
        <Typography variant="h3" color="white" sx={{            display: "inline-block",
            width: "100%",
            textAlign: "center",
            margin: "auto",
            borderBottom: "1px solid white",}}>
          Habilidades blandas
        </Typography>
        {open ? <MdKeyboardArrowUp size={30} color="white" /> : <MdKeyboardArrowDown size={30} color="white" />}
      </Box>

      {/* CONTENIDO */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
          >
            <Box
              sx={{
                mt: 3,
                width: {lg:"100%", xs:"90%"},
                ml:0.1,
                display: "grid",
                gap: { xs: 2, sm: 3, md: 7 },
                gridTemplateColumns: {
                  xs: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                  lg: "repeat(4, 1fr)" // máximo 4 por fila
                },
                alignItems: "stretch" // fuerza que cada card ocupe la misma altura de la fila
              }}
            >
              {softSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <Box
                    key={skill.titulo}
                    sx={{
                      width: "100%",
                      // Forma rectangular (ancho > alto). aspectRatio usa ancho/alto.
                      minHeight: { xs: 180, sm: 160, lg:200 },
                      maxHeight: { xs: 240, sm: 200, lg:200 },
                      display: "flex",
                      flexDirection: "row", // icono a la izquierda, texto a la derecha (rectángulo)
                      mt: {lg:5, xs:2},
                      gap:2,
                      px: 2,
                      bgcolor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 6,
                      backdropFilter: "blur(6px)",
                      alignItems: "center",
                      transition: "transform 0.18s ease, box-shadow 0.18s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.45)"
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: 54,
                        height: 54,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "rgba(255,255,255,0.06)",
                        borderRadius: 1.5,
                        flexShrink: 0
                      }}
                    >
                      <Icon sx={{ fontSize: 36, color: "white" }} />
                    </Box>

                    <Box sx={{ textAlign: "left", flex: 1 }}>
                      <Typography variant="subtitle1" color="white" sx={{ fontWeight: 600 }}>
                        {skill.titulo}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="white"
                        sx={{
                          mt: 0.6,
                          fontSize: "0.95rem",
                          lineHeight: 1.3,
                          // limitada a X líneas para evitar romper layout si la descripción es larga
                          display: "-webkit-box",
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden"
                        }}
                      >
                        {skill.descripcion}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default SoftSkills;
