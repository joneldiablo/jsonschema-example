import React from 'react';
import Form from "react-jsonschema-form";
import schemas from "./schemas";
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schema: schemas.register.schema,
      uiSchema: schemas.register.uiSchema
    }
    this.onChange = this.onChange.bind(this);
  };
  async onSubmit(e) {
    let response = await fetch('api/form.json', {
      method: 'POST',
      body: JSON.stringify(e.formData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => {
        console.error('Error:', error);
        return false;
      });

    if (response) {
      console.log(response);
    }

  }

  onChange(e) {
    this.setState({
      schema: schemas[e.target.value].schema,
      uiSchema: schemas[e.target.value].uiSchema
    })
  }

  render() {
    return (
      <div className="App">
        <br />
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-6 col-lg-4">
            <div className="form-group from-inline">
              <label htmlFor="selectForm">Selecciona un formulario...</label>
              <select onChange={this.onChange} id="selectForm" className="form-control">
                <option disabled>Selecciona un esquema</option>
                <option value="register">registro</option>
                <option value="quest">cuestionario</option>
              </select>
            </div>
            <hr />
            <Form schema={this.state.schema} uiSchema={this.state.uiSchema} onSubmit={this.onSubmit} />
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default App;
