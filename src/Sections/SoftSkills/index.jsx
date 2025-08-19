import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import * as MuiIcons from "@mui/icons-material";

function SoftSkills({ data }) {
  const [open, setOpen] = useState(true);

  if (!data) return null;

  return (
    <Box
      id={data.section_text?.toLowerCase() || "softskills"}
      sx={{
        width: "100%",
        maxWidth: 1200,
        mx: "auto",
        mt: { xs: 6, md: 10 },
        mb: { xs: 6, md: 12 },
      }}
    >
      {/* Header con toggle */}
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
        }}
      >
        <Typography
          variant="h3"
          color="white"
          sx={{
            display: "inline-block",
            width: "100%",
            textAlign: "center",
            margin: "auto",
            borderBottom: "1px solid white",
          }}
        >
          {data.title_section || "Habilidades Blandas"}
        </Typography>
        {open ? (
          <MdKeyboardArrowUp size={30} color="white" />
        ) : (
          <MdKeyboardArrowDown size={30} color="white" />
        )}
      </Box>

      {/* Contenido dinámico */}
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
                width: { lg: "100%", xs: "90%" },
                display: "grid",
                gap: { xs: 2, sm: 3, md: 7 },
                gridTemplateColumns: {
                  xs: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                  lg: "repeat(4, 1fr)",
                },
                alignItems: "stretch",
              }}
            >
              {data.content?.map((skill) => {
                const Icon = MuiIcons[skill.icon] || MuiIcons.RocketLaunch;
                return (
                  <Box
                    key={skill.title}
                    sx={{
                      width: "100%",
                      minHeight: { xs: 180, sm: 160, lg: 200 },
                      maxHeight: { xs: 240, sm: 200, lg: 200 },
                      display: "flex",
                      flexDirection: "row",
                      mt: { lg: 5, xs: 2 },
                      gap: 2,
                      px: 2,
                      bgcolor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 6,
                      backdropFilter: "blur(6px)",
                      alignItems: "center",
                      transition: "transform 0.18s ease, box-shadow 0.18s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
                      },
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
                        flexShrink: 0,
                      }}
                    >
                      <Icon sx={{ fontSize: 36, color: "white" }} />
                    </Box>

                    <Box sx={{ textAlign: "left", flex: 1 }}>
                      <Typography
                        variant="subtitle1"
                        color="white"
                        sx={{ fontWeight: 600 }}
                      >
                        {skill.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="white"
                        sx={{
                          mt: 0.6,
                          fontSize: "0.95rem",
                          lineHeight: 1.3,
                          display: "-webkit-box",
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {skill.description}
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
