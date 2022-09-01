import axios from "axios";
import { MDBBtn } from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AlbumView = () => {
  const [albumPageData, setAlbumPageData] = useState();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    albumViewGetAPIHanlder();
  }, []);

  const albumViewGetAPIHanlder = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(function (response) {
        setAlbumPageData(response?.data);
      });
  };

  console.log("++++++albumUserData", albumPageData);

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <div className="row boxViewAlbum">
          <p className="col-md-12 fs-3">User Detail</p>
          <hr />
          <div style={{ padding: "5%" }}>
            <img src={albumPageData?.thumbnailUrl} />
          </div>
          <p className="col-md-6 fw-bold">Title :</p>
          <p className="col-md-6">{albumPageData?.title}</p>
        </div>
        <MDBBtn color="secondary" onClick={() => navigate(-2)}>
          Home Page
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

export default AlbumView;
