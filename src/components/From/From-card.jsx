import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useCreateApiMutation } from "../../redux/service/user-service";

export const FromCard = () => {
  const { handleSubmit, register, reset } = useForm();
  const [userMutaTion] = useCreateApiMutation();

  const submit = (data) => {
    console.log(data);
    userMutaTion(data)
      .unwrap()
      .then((res) => {
        console.log(res);
      });

    reset();
  };
  return (
    <Stack>
      <form onSubmit={handleSubmit(submit)}>
        <Stack gap={"20px"} mb={"40px"}>
          <TextField placeholder="Title" {...register("title")} />
          <TextField placeholder="Description" {...register("description")} />
          <Button type="submit" variant="contained">
            Send
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};
