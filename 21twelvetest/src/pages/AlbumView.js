import axios from "axios";
import { MDBBtn } from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonMDBBtn from "../component/Button";

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

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <div className="row boxViewAlbum">
          <p className="col-md-12 fs-3">Album Page</p>
          <hr />
          <div style={{ padding: "5%" }}>
            <img src={albumPageData?.thumbnailUrl} />
          </div>
          <p className="col-md-6 fw-bold">Title :</p>
          <p className="col-md-6">{albumPageData?.title}</p>
        </div>
        <ButtonMDBBtn
          color={"secondary"}
          onClick={() => navigate(-2)}
          name={"Home Page"}
        />
        <ButtonMDBBtn
          color={"danger"}
          style={{ marginLeft: "10px" }}
          onClick={() => navigate(-1)}
          name={"Back"}
        />
      </div>
    </>
  );
};

export default AlbumView;
