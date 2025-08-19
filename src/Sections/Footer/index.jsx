import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as styles from "./styles";
import * as SiIcons from "react-icons/si";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function Footer({ data }) {
  const [open, setOpen] = useState(true);

  if (!data) return null;

  return (
    <Box
      id={data.section_text?.toLowerCase() || "contacto"}
      sx={{
        textAlign: "center",
        width: { xs: "90%", md: "80%", lg: "60vw" },
        minHeight: "auto",
        marginTop: { lg: "6%", xs: "20%" },
        marginBottom: { lg: "1%", xs: "30%" },
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
            ...styles.titleHoverScale,
          }}
        >
          <Typography
            variant="h3"
            color="white"
            sx={{
              mr: 3,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              ...styles.titleHoverScale,
            }}
          >
            {data.title_section || "Contacto"}
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
                width: "100%",
                minHeight: "160px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  mt: { xs: 2, md: "5%" },
                }}
              >
                {data.content?.map((item, i) => {
                  // Selección dinámica del icono
                  let IconComponent = SiIcons[item.icon];
                  if (item.icon === "IoPhonePortraitOutline") {
                    IconComponent = IoPhonePortraitOutline;
                  }

                  return (
                    <Box
                      key={i}
                      component="a"
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        width: { xs: "100%", sm: "auto" },
                        justifyContent: { xs: "flex-start", sm: "center" },
                        backgroundColor: "rgba(255,255,255,0.05)",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        textDecoration: "none",
                        "&:hover": {
                          transform: "scale(1.03)",
                          backgroundColor: "rgba(255,255,255,0.1)",
                        },
                      }}
                    >
                      {IconComponent && <IconComponent size={22} color="white" />}
                      <Typography
                        variant="body2"
                        color="white"
                        sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
                      >
                        {item.label}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer de copyright */}
      <Box
        sx={{
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: { lg: "3%" },
        }}
      >
        <Typography variant="body2" color="white">
          © {new Date().getFullYear()} | Gracias por tu visita.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
