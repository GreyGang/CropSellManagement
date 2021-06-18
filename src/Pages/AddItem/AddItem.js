import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { AddItemWrapper } from "./AddItem.style";
import client from "../../Utils/Connection";
import { useHistory } from "react-router-dom";
export default function AddItem() {
  const options = [
    { text: "Spices", value: "spices" },
    { text: "Fruits", value: "fruit" },
    { text: "Vegetable", value: "vegetable" },
    { text: "Oil", value: "oil" },
    { text: "Coffee/tea", value: "coffee/tea" },
    { text: "Fish", value: "fish" },
    { text: "Poultry", value: "poultry" },
    { text: "Fertilizers", value: "fertilizers" },
    { text: "Woods", value: "Woods" },
    { text: "Other", value: "other" },
  ];

  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const [about, setAbout] = useState("");

  const handleChange = (value, setter) => {
    setter(value);
  };

  const history = useHistory();
  const handleSubmit = () => {
    console.log(type, title, price, quantity, about, image);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("type", type);
    formData.append("about", about);
    formData.append("photo", image);
    client
      .post("/items/newItem", formData)
      .then((res) => {
        console.log(res);
        history.push("/shop");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AddItemWrapper>
      <Form>
        <Form.Input
          fluid
          label="Title"
          placeholder="Title"
          onChange={(e) => {
            handleChange(e.target.value, setTitle);
          }}
        />
        <Form.Input
          fluid
          label="Price in INR"
          placeholder="Price in INR"
          onChange={(e) => {
            handleChange(e.target.value, setPrice);
          }}
        />
        <Form.Input
          fluid
          label="quantity in KG"
          placeholder="quantity in KG"
          onChange={(e) => {
            handleChange(e.target.value, setQuantity);
          }}
        />
        <Form.Select
          fluid
          label="Type"
          options={options}
          placeholder="Type"
          onChange={(e, { value }) => {
            handleChange(value, setType);
          }}
        />
        <Form.TextArea
          label="About"
          placeholder="Tell us more about more product..."
          onChange={(e) => {
            handleChange(e.target.value, setAbout);
          }}
        />
        <Form.Field>
          <label>File input & upload for dataschemas & datasources</label>
          <input
            type="file"
            onChange={(e) => {
              handleChange(e.target.files[0], setImage);
            }}
          />
        </Form.Field>
        <Form.Button onClick={handleSubmit}>Submit</Form.Button>
      </Form>
    </AddItemWrapper>
  );
}
