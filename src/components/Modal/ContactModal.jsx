import React from "react";
import Button from "react-bootstrap/Button";
import Fade from "@material-ui/core/Fade";
import { makeStyles, Modal } from "@material-ui/core";
import { useForm } from "@formcarry/react";
import "./modalc.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    border: "2px solid purple",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    backgroundColor: "#191227",
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // Call the `useForm` hook in your function component
  const { state, submit } = useForm({
    id: "u4dXKk5fNNv",
  });

  // Success message
  if (state.submitted) {
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form onSubmit={submit}>
            <div className={classes.paper} style={{ textAlign: "Center" }}>
              <div style={{ color: "red" }}>
                Thank you! We received your submission.
              </div>
              <div></div>
            </div>
          </form>
        </Fade>
      </Modal>
    );
  }
  return (
    <div>
      <Button
        variant="primary"
        target="_blank"
        data-aos="fade-down"
        onClick={handleOpen}
        style={{ marginTop: "-20px" }}
      >
        Click To Send Messege
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form onSubmit={submit}>
            <div className={classes.paper} style={{ textAlign: "Center" }}>
              <h2 id="transition-modal-title" style={{ color: "white" }}>
                Send Messege
              </h2>
              <div>
                <input
                  type="text"
                  placeholder="Write Your Name"
                  className="input-nilp"
                  required
                />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Write Your Email"
                  className="input-nilp"
                  required
                />
                <textarea
                  id="message"
                  placeholder="Write here..."
                  name="message"
                  className="input-nilp2"
                  required
                />
                <br /> <br />
                <Button type="submit" style={{ width: "60%" }}>
                  SEND
                </Button>
              </div>
            </div>
          </form>
        </Fade>
      </Modal>
    </div>
  );
}
