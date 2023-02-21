import React, { useState } from "react";
import Button from "@mui/material/Button";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import LoadingButton from "@mui/lab/LoadingButton";
import CompressIcon from "@mui/icons-material/Compress";
import { Slider } from "@mui/material";

export default function DisplayPanel() {
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const handleFileSelected = (e) => {
    if (e.target.files.length !== 0) {
      const files = Array.from(e.target.files);
      setFile(URL.createObjectURL(files[0]));
    }
  };
  const handleCompress = () => {
    setLoading(true);
  };
  return (
    <div>
      <Button variant="contained" component="label">
        <PhotoCamera /> &nbsp;Upload
        <input
          onChange={handleFileSelected}
          hidden
          accept="image/*"
          type="file"
        />
      </Button>
      <div className="image-container" onClick={(e) => e.preventDefault()}>
        {file && (
          <>
            <img src={file} className="image-dimension"/>
            <div className="child-image">
              Compression rate:{" "}
              <Slider
                defaultValue={100}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
              <LoadingButton
                loading={loading}
                onClick={handleCompress}
                loadingPosition="start"
                startIcon={<CompressIcon />}
                variant="contained"
              >
                Compress
              </LoadingButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
