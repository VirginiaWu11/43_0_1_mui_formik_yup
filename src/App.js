import "./App.css";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
  });
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="firstName"
          name="firstName"
          label="First Name"
          margin="normal"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        <TextField
          id="lastName"
          name="lastName"
          label="Last Name"
          margin="normal"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
        <TextField
          id="email"
          name="email"
          label="Email Address"
          margin="normal"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default App;
