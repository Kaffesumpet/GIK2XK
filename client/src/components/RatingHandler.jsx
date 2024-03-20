import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { createRating } from "../services/RatingService";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function RatingHandler(productId) {
  const ratingHandlerUpdate = async (event, newValue) => {
    try {
      await createRating(productId, newValue);
      window.location.reload();
    } catch (e) {
      e?.response ? console.log(e.response.data) : console.log(e);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Typography sx={{ marginBottom: 1 }} component="legend">
        Rate this product
      </Typography>
      <Rating
        onChange={ratingHandlerUpdate}
        getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
        name="simple-controlled"
        icon={<StarIcon fontSize="inherit" />}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
      />
    </Box>
  );
}

export default RatingHandler;
