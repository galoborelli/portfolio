import { Box, Typography } from "@mui/material";
import { MdSchool, MdDateRange, MdLocationCity } from "react-icons/md";
import * as styles from "./styles";

function EducationItem({ data }) {
  if (!data) return null;

  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "800px",
        margin: "1rem auto",
       
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        bgcolor: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 6,
        backdropFilter: "blur(6px)",
        cursor: "pointer",
        transition: "transform 0.18s ease, box-shadow 0.18s ease",
        "&:hover": {
            transform: "translateY(-12px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.45)"
        },
         // 🔽 PADDING Y a todos los hijos
        '& > *': {
            py: 1,
        },
    }}
    
    >
      {/* Encabezado: Universidad + Título */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <MdLocationCity color="white" size={24} />
        <Typography variant="h6" color="white" >
          {data.university}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <MdSchool color="white" size={24} />
        <Typography variant="subtitle1" color="white">
          {data.title}
        </Typography>
      </Box>

      {/* Descripción */}
      <Typography
        variant="body2"
        color="white"
        sx={{
          fontSize: { lg: "1rem", xs: "0.9rem" },
          textAlign: "justify",
          lineHeight: 1.6,
        }}
      >
        {data.description}
      </Typography>

      {/* Fechas */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          justifyContent: "flex-start",
        }}
      >
        <MdDateRange color="white" size={20} />
        <Typography variant="body2" color="white">
          {data.start_date} - {data.end_date}
        </Typography>
      </Box>
    </Box>
  );
}

export default EducationItem;
