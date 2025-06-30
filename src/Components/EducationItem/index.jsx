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
        margin: "2rem auto",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "16px",
        backdropFilter: "blur(8px)",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        cursor:"pointer",
        ...styles.titleHoverScale,
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
