import React, { useState } from "react";
import "../CSS/ColumnCard.css";
import { Link, useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Button, IconButton, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import axios from "../axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function ColumnCard({ imageUrl, title, date, width, height, id, myblogs }) {
  // const mode = useSelector((state) => state.mode);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const mode = localStorage.getItem("thememode");
  const [modalOpen, setModalOpen] = useState(false);
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const handleEdit = () => {
    navigate(`/update/blog/${id}`);
  };

  const handleModal = () => {
    handleOpen();
    setModalOpen(true);
  };

  const deleteRequest = async () => {
    const res = await axios
      .delete(`/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = res.data;
    console.log(data);
    return data;
  };

  const handleDelete = () => {
    toggleBackdrop();
    deleteRequest().then(() => window.location.reload(true));
    handleClose();
    setDropdownOpen(false);
    toggleBackdrop();
  };

  const toggleBackdrop = () => {
    setOpenBackdrop(!openBackdrop);
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "#fff",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const DropdownMenu = () => {
    return (
      <div className="card-dropdown-menu">
        <ul>
          <div className="card-dropdown-item" onClick={handleEdit}>
            <EditOutlinedIcon className="card-dropdown-icon" />
            <p>Edit Blog</p>
          </div>
          <div className="card-dropdown-item" onClick={handleModal}>
            <DeleteOutlineOutlinedIcon className="card-dropdown-icon" />
            <p>Delete Blog</p>
          </div>
        </ul>
      </div>
    );
  };
  // console.log(dropdownOpen);
  return (
    <div className="column-card-container">
      {myblogs && (
        <div className="my-blogs-dropdown">
          <div className="my-blogs-options">
            <IconButton>
              <MoreVertIcon
                style={{ color: "#fff" }}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
            </IconButton>
          </div>
          {dropdownOpen && <DropdownMenu />}

          <Modal
            open={modalOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle}>
              <Typography variant="h6" component="h2">
                Are you sure you want to delete this blog?
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button sx={{ color: "#fa057b" }} onClick={handleDelete}>
                  Yes
                </Button>
                <Button sx={{ color: "#fa057b" }} onClick={handleClose}>
                  No
                </Button>
              </Box>
            </Box>
          </Modal>

          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={openBackdrop}
            // onClick={handleCloseBackdrop}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      )}
      <Link className="column-card" style={{ width }} to={`/blogs/${id}`}>
        {/*  */}
        <div className="img-container" style={{ height }}>
          <img src={imageUrl} alt="" />
        </div>
        <div className="title">
          <Link style={{ textDecoration: "none" }} to={`/blogs/${id}`}>
            <h3
              className={
                mode === "dark" ? "title-h3 dark-title-h3" : "title-h3"
              }
            >
              {title}
            </h3>
          </Link>
        </div>
        <p className={mode === "dark" ? "desc dark-desc" : "desc"}>{date}</p>
      </Link>
    </div>
  );
}

export default ColumnCard;
