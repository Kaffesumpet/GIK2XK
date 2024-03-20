/* eslint-disable react/prop-types */
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import RatingItem from "./RatingItem";
import { Card, CardContent, Typography, Box } from "@mui/material";

function ProductItemSmall({ product }) {
  const theme = useTheme();
  const primaryTextColor = theme.palette.text.primary;

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;
    return description.slice(0, maxLength - 3) + "...";
  };

  return (
    <Link
      to={`/products/${product.productId}`}
      style={{ textDecoration: "none", marginRight: theme.spacing(0.5) }}
    >
      <Card sx={{ display: "flex", maxWidth: 1000 }}>
        <Box
          sx={{
            width: "40%",
            background: `url(${product.imageUrl}) center/cover no-repeat`,
            minHeight: 150,
            flexShrink: 0,
            order: [1, 0],
          }}
        />
        <Box
          sx={{
            width: "60%",
            background: "#274661",
          }}
        >
          <CardContent sx={{ width: "100%" }}>
            <Typography
              component="div"
              variant="h5"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {product.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                whiteSpace: "normal",
                mt: 0.5,
              }}
              style={{ color: primaryTextColor }}
            >
              {truncateDescription(product.description, 140)}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", pt: 0.5 }}>
              <RatingItem ratings={product.ratings} />
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Link>
  );
}

export default ProductItemSmall;
