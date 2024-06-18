import React from "react";
import { Container, Stack } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const Profile = () => {
const user = {
  name:"Ahmed",
  avatar:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvector%2Fmale-avatar-profile-picture-vector-119675554.html&psig=AOvVaw1ojPmrs4wANZ2rmc_MiCij&ust=1718798635653000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJiA2oKO5YYDFQAAAAAdAAAAABAE",
  email:"ahmed@gmail.com",
  phone:"012342111"
  
}
  return (
    <>
      <Container className="my-4">
        <h1 className="mb-3">PROFILE</h1>
        {user && (
          <Stack style={{ width: "fit-content", margin: "0 auto" }} gap={1}>
            <Stack direction="horizontal" gap={3}>
              <img
                style={{
                  width: "250px",
                  height: "250px",
                  borderRadius: "100%",
                  marginBottom: "100px",
                }}
                src={user.avatar && user.avatar.url}
                alt="avatar"
              />
            </Stack>
            <Stack direction="horizontal" gap={3}>
              <p className="fw-bold">NAME:</p>
              <p>{user.name}</p>
            </Stack>
            <Stack direction="horizontal" gap={3}>
              <p className="fw-bold">EMAIL:</p>
              <p>{user.email}</p>
            </Stack>
            <Stack direction="horizontal" gap={3}>
              <p className="fw-bold">PHONE:</p>
              <p>{user.phone}</p>
            </Stack>
          </Stack>
        )}
      </Container>
    </>
  );
};

export default Profile;
