import { CardMedia } from "@mui/material";
import { Box, Typography } from "@mui/material";
import * as styles from "../../Components/ProjectItem/style";
import { SiDjango, SiVite, SiPostgresql, SiStripe, SiPython, SiAngular, SiTypescript, SiNodedotjs } from "react-icons/si";
import { Button } from "@mui/material";
const iconMap = {
  django: <SiDjango color="white" size={30} />,
  python: <SiPython color="white" size={30} />,
  vite: <SiVite color="white" size={30} />,
  postgresql: <SiPostgresql color="white" size={30} />,
  stripe: <SiStripe color="white" size={30} />,
  angular: <SiAngular color="white" size={30} />,
  typescript:<SiTypescript color="white" size={30} />,
  node:<SiNodedotjs color="white" size={30} />,
  postgres: <SiPostgresql color="white" size={30} />,
};

function InfoCard({ data }) {
  if (!data || !data.medias?.[0]?.url) {
    return null;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
     
      }}
    >

      {/* Imagen primero en mobile */}
      <Box
        sx={{
          width: { xs: "100%", lg: "50%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          order: { xs: 1, lg: 2 },
          position: "relative",
          overflow: "hidden",
          '&:hover .overlay': {
            opacity: 1,
          },
        }}
      >

        <Box
          className="overlay"
          sx={{
            position: "absolute",
            width: { lg: "350px", xs: "200px" },
            height: { lg: "200px", xs: "150px" },
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            opacity: 0,
            transition: "opacity 0.3s ease-in-out",
            borderRadius: "13%",
            cursor: "pointer",
          }}
        >
          {data.tecnologies.map((i, tecnologie) => iconMap[tecnologie, i])}
        </Box>
        <CardMedia
          component="img"
          src={data.medias[0].url}
          sx={{
            ...styles.imageScale,
            width: { lg: "350px", xs: "200px" },
            height: { lg: "200px", xs: "150px" },
            objectFit: "cover",
            borderRadius: "13%",
          
          }}
        />
        
      </Box>

      {/* Título y descripción luego */}
      <Box
        sx={{
          width: { xs: "100%", lg: "50%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          order: { xs: 2, lg: 1 },
        }}
      >
        <Typography variant="h5" color="white" mt={2}>
          {data.title}
        </Typography>
        <Typography
          variant="body1"
          color="white"
          sx={{
            fontSize: { lg: "1rem", xs: "0.8rem" },
            textAlign: "center",
            width: "100%",
            padding:"1rem"
          }}
        >
          {data.description}
        </Typography>
      </Box>
      <Box sx={{display:"flex",flexDirection:{lg:"column", xs:"row"}, gap:2,  margin:2,order:{lg:2, xs:0}}}>
      <Button
    variant="outlined"
    href={data.link_front}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      color: '#fff',
      borderColor: '#90caf9',
      textTransform: 'none',
      fontWeight: 500,
      px: 3,
      borderRadius: '12px',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: '#90caf9',
        color: '#0d1117',
        borderColor: '#90caf9',
      },
    }}
  >
    Ver Frontend
  </Button>

  <Button
    variant="outlined"
    href={data.link_back}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      color: '#fff',
      borderColor: '#f48fb1',
      textTransform: 'none',
      fontWeight: 500,
      px: 3,
      borderRadius: '12px',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: '#f48fb1',
        color: '#0d1117',
        borderColor: '#f48fb1',
      },
    }}
  >
    Ver Backend
  </Button>
        </Box>
    </Box>
  );
}

export default InfoCard;
