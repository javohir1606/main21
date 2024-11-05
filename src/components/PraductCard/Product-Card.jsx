import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import {
  useDeleteMutation,
  useEditMutation,
} from "../../redux/service/user-service";
export const ProductCard = ({ title, description, id }) => {
  const [handDelet] = useDeleteMutation();
  const [handEdit] = useEditMutation();

  const handleEditClick = (id, title, description) => {
    const TitleEdit = prompt("title");
    const DesEdit = prompt("des");
    if (TitleEdit && DesEdit) {
      handEdit({ id, title: TitleEdit, description: DesEdit })
        .unwrap()
        .then((res) => {
          console.log(res);
          toast.success("Successfully Edited");
        });
    }
  };

  const handleDeleteClick = (id) => {
    handDelet(id)
      .unwrap()
      .then((res) => console.log(res));
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
          onClick={() => handleEditClick(id)}
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
          onClick={() => handleDeleteClick(id)}
          sx={{ bgcolor: "red", "&:hover": { bgcolor: "darkred" } }}
          variant="contained"
        >
          Delete
        </Button>
      </Stack>
    </Stack>
  );
};
