import React from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useGetUserByIdQuery } from "../components/show/showCard";

export function UserDetail() {
  const { id } = useParams();
  const { data: userData, error, isLoading } = useGetUserByIdQuery(id); 

  if (isLoading) return <p>Loading...</p>; 
  if (error) return <p>Error fetching user data.</p>; 
  if (!userData) return <p>User not found.</p>; 

  return (
    <div>
      <Typography variant="h3">{userData.title}</Typography>
      <Typography variant="h5">{userData.description}</Typography>
    </div>
  );
}
