import { useState } from "react";
import axios from "axios";
import "./styles/AddProduct.css"; // Assuming your CSS file is in the same directory as your component

const Addproduct = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("upload_preset", "smlhwttu");
      formData.append("cloudName", "difp3l0rp");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/difp3l0rp/image/upload",
        formData
      );
      console.log("Image Upload :", response.data);
      console.log("Image Upload :", response.data.url);
      setImgUrl(response.data.url);
      let imgpath = response.data.url;
      let input = {
        ProductTitle: title,
        ProductName: desc,
        productPrice: price,
        productImage: imgpath,
      };
      console.log(input);
      await axios.post("http://localhost:8000/addproduct", input);
    } catch (error) {
      console.error("error in upload image", error);
    }
  };

  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Image Upload in Cloud</h1>
        <div className="form-group">
          <label>Enter Name :</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Enter Title :</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Enter Price :</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Upload Image :</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <button onClick={handleUpload} className="button">
          Save it
        </button>
        {imgUrl && <img src={imgUrl} className="image-preview" alt="/" />}
      </div>
    </>
  );
};

export default Addproduct;
