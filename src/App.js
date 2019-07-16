import React from 'react';
import Form from "react-jsonschema-form";
import { register } from "./schemas";
import './App.scss';



const onSubmit = async (e) => {
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

function App() {
  return (
    <div className="App">
      <div className="row justify-content-center">
        <div className="col-10 col-sm-8 col-md-6 col-lg-4">
          <Form schema={register.schema} uiSchema={register.uiSchema} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
}

export default App;
