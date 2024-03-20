/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useState } from "react";
import Popover from "@mui/material/Popover";

function DetailedRating({ ratings }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    if (event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "rating-popover" : undefined;

  const sum = ratings.reduce((acc, val) => acc + val, 0);
  const mean = sum / ratings.length;

  const ratingCounts = ratings.reduce((acc, rating) => {
    acc[rating] = (acc[rating] || 0) + 1;
    return acc;
  }, {});

  const sortedRatings = Object.keys(ratingCounts).sort((a, b) => b - a);

  return (
    <div>
      <Box
        sx={{ display: "flex", alignItems: "center", "& > *": { mr: 1 } }}
        onClick={handleClick}
        style={{
          cursor: "pointer",
        }}
      >
        <Typography>Average rating:</Typography>
        <Rating
          name="customized-color"
          value={mean}
          precision={0.1}
          readOnly
          icon={<StarIcon fontSize="inherit" />}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{ "& .MuiPaper-root": { backgroundColor: "#082146" } }}
      >
        <Box p={1} borderRadius={6} width={150}>
          <Typography variant="subtitle1" fontWeight="bold">
            Rating List:
          </Typography>
          <ul style={{ listStyleType: "none", padding: 0, marginTop: "5px" }}>
            {sortedRatings.map((rating, index) => (
              <li
                key={rating}
                style={{ marginBottom: "3px", fontSize: "12px" }}
              >
                {`${rating} (${ratingCounts[rating]})`}
              </li>
            ))}
          </ul>
        </Box>
      </Popover>
    </div>
  );
}

export default DetailedRating;
