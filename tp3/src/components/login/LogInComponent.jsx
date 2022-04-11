import { Field, Form } from "react-final-form";

const LogInComponent = () => {
  const onSubmit = (values) => {
    console.log(values.pseudo);
    alert(values);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form className="container" onSubmit={handleSubmit}>
          <h1>Connexion</h1>
          <div>
            <label className="form-label">Pseudo</label>
            <Field
              className={"form-control mb-2 "}
              name="username"
              component="input"
              placeholder="Pseudo"
              allowNull={false}
              required={true}
            />
          </div>
          <div>
            <label className="form-label">Password</label>
            <Field
              className={"form-control mb-2 "}
              name="password"
              type="password"
              component="input"
              placeholder="Password"
              allowNull={false}
              required={true}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Se connecter
          </button>
        </form>
      )}
    />
  );
};

export default LogInComponent;
