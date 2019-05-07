import React from 'react';
import { TextField, Button, Paper } from '@material-ui/core/';
import "./Form.css"

const Form = (props) => {
  const { userName, handleChange, handleSubmit } = props;
  //^ this is called destructuring. Cleaner code so you dont have to repeat this.props for everything.


  return (
    <Paper>
      <form className="form-container" onSubmit={handleSubmit}>
        <TextField
          id="standard-name"
          label="Name"
          value={userName}
          onChange={handleChange}
          margin="normal"
        />
        <Button 
          variant="outlined" 
          color="primary"
          type="submit">
          Submit
        </Button>
      </form>
    </Paper>
  )
};

export default Form;