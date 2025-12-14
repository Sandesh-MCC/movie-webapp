import React from "react";
import { Pagination, Stack } from "@mui/material";


const MoviePagination = ({ page, totalPages, onPageChange }) => {
if (totalPages <= 1) return null;


return (
<Stack spacing={2} alignItems="center" sx={{ mt: 19 }}>
<Pagination
count={totalPages}
page={page}
onChange={(e, value) => onPageChange(value)}
color="primary"
/>
</Stack>
);
};


export default MoviePagination;