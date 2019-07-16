import React from 'react';
import Form from "react-jsonschema-form";
import './App.scss';

const schema = {
  title: "Formulario de registro",
  type: "object",
  properties: {
    user: {
      type: "object",
      title: "datos de usuario",
      required: ["firstname"],
      properties: {
        firstname: { type: "string", title: "Nombre", default: "" },
        lastname: { type: "string", title: "Apellidos", default: "" }
      }
    },
    address: {
      type: "object",
      title: "Dirección",
      properties: {
        zipcode: { type: "string", title: "Código postal", default: "" },
        street: { type: "string", title: "Calle", default: "" },
        city: { type: "string", title: "Ciudad", default: "" },
        country: { type: "string", title: "Pais", default: "" }
      }
    }
  }
}

const uiSchema = {
  user: {
    firstname: {
      "ui:options": {
        label: false,
      },
      "ui:placeholder": "Nombre*"
    },
    lastname: {
      "ui:options": {
        label: false,
      },
      "ui:placeholder": "Apellidos"
    }
  },
  address: {
    zipcode: {
      "ui:options": { label: false },
      "ui:placeholder": "Código postal"
    },
    street: {
      "ui:options": { label: false },
      "ui:placeholder": "Calle"
    },
    city: {
      "ui:options": { label: false },
      "ui:placeholder": "Ciudad"
    },
    country: {
      "ui:options": { label: false },
      "ui:placeholder": "Pais"
    }
  }

}

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
          <Form schema={schema} uiSchema={uiSchema} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
}

export default App;
