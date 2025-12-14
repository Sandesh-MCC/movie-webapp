import React from "react";
import { Box, Typography } from "@mui/material";


const Footer = () => {
return (
<Box
component="footer"
sx={{
textAlign: "center",
p: 2,
mt: 40,
backgroundColor: "#f5f5f5",
}}
>
<Typography variant="body2" color="textSecondary">
© {new Date().getFullYear()} sandesh mali. All rights reserved.
</Typography>
</Box>
);
};


export default Footer;