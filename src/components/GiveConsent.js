import React, { useState } from "react";
import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Container,
} from "@material-ui/core";
import { connect } from "react-redux";
import addConsent from "../actionCreators/addConsent";
import { navigate } from "@reach/router";

function GiveConsent({ addConsent }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    addConsent({ name, email, consent });
    navigate("/consents");
  };

  const handleCheckBox = (e) => {
    if (e.target.checked === true) {
      setConsent([...consent, e.target.value]);
    } else {
      setConsent(consent.filter((item) => item !== e.target.value));
    }
  };
  return (
    <>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <TextField
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              label="Name"
              id="name"
            />
            <TextField
              required
              type="email"
              label="Email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>I agree to:</p>
            <FormControlLabel
              control={<Checkbox name="newsletter" />}
              label="Recieve newsletter"
              value="Recieve newsletter"
              onChange={handleCheckBox}
            />
            <FormControlLabel
              control={<Checkbox name="ads" />}
              label="Be shown targeted ads"
              value="Be shown targeted ads"
              onChange={handleCheckBox}
            />
            <FormControlLabel
              control={<Checkbox name="statistics" />}
              label="Contribute to anonymous visit statistics"
              value="Contribute to anonymous visit statistics"
              onChange={handleCheckBox}
            />
            <Button
              disabled={consent.length ? false : true}
              style={{ width: "35%", margin: "auto" }}
              type="submit"
              variant="contained"
              color="secondary"
            >
              Give consent
            </Button>
          </FormGroup>
        </form>
      </Container>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addConsent: (data) => dispatch(addConsent(data)),
});

export default connect(null, mapDispatchToProps)(GiveConsent);
