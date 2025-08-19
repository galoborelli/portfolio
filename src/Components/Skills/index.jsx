import { Box, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as styles from "./styles";

import * as SiIcons from "react-icons/si";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function Skills({ data }) {
  const [open, setOpen] = useState(true);

  if (!data) return null;

  return (
    <Box
      id={data.section_text?.toLowerCase() || "habilidades"}
      sx={{
        textAlign: "center",
        width: { xs: "100%", md: "80%", lg: "60vw" },
        height: { lg: "300px", xs: "auto" },
        marginTop: { lg: "5%", xs: "30%" },
        marginBottom: { lg: "1%" },
        mx: "auto",
        px: { xs: 2, md: 0 },
      }}
    >
      {/* Header con toggle */}
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
            {data.title_section || "Habilidades"}
          </Typography>
          {open ? (
            <MdKeyboardArrowUp size={40} color="white" />
          ) : (
            <MdKeyboardArrowDown size={40} color="white" />
          )}
        </Box>
      </Box>

      {/* Contenido dinámico con animación */}
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
                py: { lg: 12, xs: 0 },
                marginTop: { xs: "20%", lg: "0%" },
              }}
            >
              {data.content.map((item, i) => {
                const IconComponent = SiIcons[item.icon];
                return (
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
                      {IconComponent ? (
                        <IconComponent size={{ xs: 40, lg: 55 }} color={item.color} />
                      ) : null}
                    </IconButton>
                    <Typography
                      variant="body2"
                      color="white"
                      sx={{ fontSize: "0.75rem" }}
                    >
                      {item.label}
                    </Typography>
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

export default Skills;
