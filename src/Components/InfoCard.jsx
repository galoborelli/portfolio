import { CardMedia } from "@mui/material";
import { Box, Typography } from "@mui/material";

function InfoCard({ data }) {
    if (!data || !data.medias?.[0]?.url) {
        return null; // o un fallback visual
      }

    console.log(data.medias[0].url)
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
            <Typography>{data.title}</Typography>
            <Typography>{data.description}</Typography>
            <CardMedia
                component="img"
                src={data.medias[0].url}
                sx={{ width: "30%", height: "30%",objectFit:"cover", borderRadius: "10%" }}
                />
        </Box>
    );
}

export default InfoCard;