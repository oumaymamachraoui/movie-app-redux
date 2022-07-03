import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_movie } from "../JS/action";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const handleADD = (e) => {
    e.preventDefault();
    if ((title && description && rate && posterUrl) !== "") {
      dispatch(
        add_movie({ id: Math.random(), title, description, rate, posterUrl })
      );
      handleClose();
    } else {
      alert("you can't add an empty task");
    }
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Movie title</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />

          <Form.Label>Movie description</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          />

          <Form.Label>Movie rate</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => {
              setRate(e.target.value);
            }}
            value={rate}
          />

          <Form.Label>Movie posterUrl</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setPosterUrl(e.target.value);
            }}
            value={posterUrl}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleADD}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
