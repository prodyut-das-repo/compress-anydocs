import React from "react";
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default function DisplayPanel() {
  return (
    <div>
      <Button variant="contained" component="label">
        <PhotoCamera /> &nbsp;Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
    </div>
  );
}
