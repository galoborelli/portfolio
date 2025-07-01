import * as styles from "./styles";
import { useState } from "react";
import { Typography, Box } from "@mui/material";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const contacts = [
  {
    icon: <SiGmail size={22} />,
    label: "borelligalo19@gmail.com",
  },
  {
    icon: <IoPhonePortraitOutline size={22} />,
    label: "+34 611 85 60 50",
  },
  {
    icon: <SiGithub size={22} />,
    label: "galoborelli",
  },
  {
    icon: <SiLinkedin size={22} />,
    label: "Galo Borelli",
  },
];

function Footer() {
  const [open, setOpen] = useState(true);

  return (
    <Box
      sx={{
        width: "60vw",
        margin: "0 auto",
        textAlign: "center",
        mt: { xs: 6, lg: "6%" },
      }}
    >
      {/* Título y flecha */}
      <Box
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          mb: 4,
        }}
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
              ...styles.titleHoverScale,
            }}
          >
            Contacto
          </Typography>
          {open ? (
            <MdKeyboardArrowUp size={40} color="white" />
          ) : (
            <MdKeyboardArrowDown size={40} color="white" />
          )}
        </Box>
      </Box>

      {/* Contenido animado */}
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
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                {contacts.map(({ icon, label }) => (
                  <Box
                    key={label}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      cursor:"pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.03)",
                        backgroundColor: "rgba(255,255,255,0.1)",
                      },
                    }}
                  >
                    <Box color="white">{icon}</Box>
                    <Typography variant="body1" color="white">
                      {label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default Footer;
