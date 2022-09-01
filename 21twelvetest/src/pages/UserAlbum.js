import axios from "axios";
import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/css/userAlbum.css";

const UserAlbum = () => {
  const [albumUserData, setAlbumUserData] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    userAlbumHanlder();
  }, []);

  const userAlbumHanlder = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then(function (response) {
        setAlbumUserData(response?.data);
      });
  };

  console.log("++++++albumUserData", albumUserData);

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <div className="row boxViewAlbum">
          <p className="col-md-12 fs-3">User Detail</p>
          <hr />
          <p className="col-md-6 fw-bold userDetailText">Title :</p>
          <p className="col-md-6 userDetailText">{albumUserData?.title}</p>
        </div>
        <MDBBtn
          color="primary"
          onClick={() => navigate(`/albumpage/${albumUserData?.id}`)}
        >
          View Album Page
        </MDBBtn>
        <MDBBtn
          color="danger"
          style={{ marginLeft: "10px" }}
          onClick={() => navigate(-1)}
        >
          Back
        </MDBBtn>
      </div>
    </>
  );
};

export default UserAlbum;
