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
    href: "mailto:borelligalo19@gmail.com"
  },
  {
    icon: <IoPhonePortraitOutline size={22} />,
    label: "+34 611 85 60 50",
    href: "tel:+34611856050"
  },
  {
    icon: <SiGithub size={22} />,
    label: "galoborelli",
    href: "https://github.com/galoborelli"
  },
  {
    icon: <SiLinkedin size={22} />,
    label: "Galo Borelli",
    href: "https://www.linkedin.com/in/galo-borelli"
  }
];

function Footer() {
  const [open, setOpen] = useState(true);

  return (
    <Box
      id="contact"
      sx={{
        textAlign: "center",
        width: { xs: "90%", md: "80%", lg: "60vw" },
        height: { lg: "500px", xs: "auto" },
        marginTop: { lg: "6%", xs: "20%" },
        marginBottom: { lg: "6%", xs: "30%" },
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
            sx={{
              mr: 3,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
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
                  flexDirection: { xs: "column", sm: "row" },
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  mt: { xs: 2, md: "5%" },
                }}
              >
              {contacts.map(({ icon, label, href }) => (
                <Box
                  key={label}
                  component="a"
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
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
                      backgroundColor: "rgba(255,255,255,0.1)"
                    }
                  }}
                >
                  <Box color="white">{icon}</Box>
                  <Typography
                    variant="body2"
                    color="white"
                    sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
                  >
                    {label}
                  </Typography>
                </Box>
              ))}
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
      <Box sx={{ height: "100px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop:{lg:"3%"} }}>
        <Typography variant="body2" color="white">
          © {new Date().getFullYear()} |    Gracias por tu visita. 
        </Typography>

      </Box>
    </Box>
  );
}


export default Footer;