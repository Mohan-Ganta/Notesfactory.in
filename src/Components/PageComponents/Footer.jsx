
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer=()=> {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#1976D2",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        position : "relative",
        bottom:"0"

      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} Notesfactory`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;