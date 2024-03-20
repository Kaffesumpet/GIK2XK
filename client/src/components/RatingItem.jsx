/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function RatingItem({ ratings }) {
  const sum = ratings.reduce((acc, val) => acc + val, 0);
  const mean = sum / ratings.length;

  return (
    <Box display="flex" alignItems="center">
      <Typography variant="body1">Average rating:</Typography>
      <Rating
        name="customized-color"
        value={mean}
        precision={0.1}
        readOnly
        icon={<StarIcon fontSize="inherit" />}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
      />
    </Box>
  );
}

export default RatingItem;
