import { Box, Typography } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(4px)",
      }}
    >
      <Box
        sx={{
          width: "120px",
          height: "30px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          margin: "0 auto",
        }}
      >
        {/* Pelotas */}
        <Box
          sx={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            backgroundColor: "rgba(14, 233, 6, 0.81)",
            animation: "salto .5s alternate infinite",
            "@keyframes salto": {
              from: { transform: "scaleX(1.25)" },
              to: { transform: "translateY(-50px) scaleX(1)" },
            },
          }}
        />
        <Box
          sx={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            backgroundColor: "rgba(14, 233, 6, 0.81)",
            animation: "salto .5s alternate infinite",
            animationDelay: ".18s",
            "@keyframes salto": {
              from: { transform: "scaleX(1.25)" },
              to: { transform: "translateY(-50px) scaleX(1)" },
            },
          }}
        />
        <Box
          sx={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            backgroundColor: "rgba(14, 233, 6, 0.81)",
            animation: "salto .5s alternate infinite",
            animationDelay: ".37s",
            "@keyframes salto": {
              from: { transform: "scaleX(1.25)" },
              to: { transform: "translateY(-50px) scaleX(1)" },
            },
          }}
        />

        {/* Texto */}
        <Typography
          sx={{
            fontSize: 20,
            textTransform: "uppercase",
            paddingTop: "20px",
            width: "100%",
            textAlign: "center",
            fontWeight: "900",
          }}
        >
          Cargando...
        </Typography>
      </Box>
    </Box>
  );
};

export default Loader;
