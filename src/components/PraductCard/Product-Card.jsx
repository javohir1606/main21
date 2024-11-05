import { Button, Stack, Typography } from "@mui/material";
import React from "react";

export const ProductCard = ({ title, description, id }) => {
  const handleEditClick = (id) => {
    console.log("Edit tugmasi bosildi!");
  };

  const handleDeleteClick = (id) => {
    console.log("Delete tugmasi bosildi!");
  };

  return (
    <Stack textAlign={"center"}>
      <Stack mb={"30px"} bgcolor={"aqua"} p={"20px"} border={"2px solid blue"}>
        <Typography color="white" variant="h3">
          {title}
        </Typography>
        <Typography color="white" variant="h5">
          {description}
        </Typography>
      </Stack>
      <Stack mx="auto" direction="row" mb="20px" spacing={2}>
      <Button
      onClick={handleEditClick}
      sx={{
        bgcolor: "green",
        color: "white",
        borderColor: "green",
        "&:hover": {
          bgcolor: "darkgreen",
          borderColor: "darkgreen",
        },
      }}
      variant="outlined"
    >
      Edit
    </Button>

        <Button
        onClick={handleDeleteClick}
          sx={{ bgcolor: "red", "&:hover": { bgcolor: "darkred" } }}
          variant="contained"
        >
          Delete
        </Button>
      </Stack>
    </Stack>
  );
};
