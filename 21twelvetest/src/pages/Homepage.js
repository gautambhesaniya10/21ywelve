import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBIcon, MDBTooltip, MDBSpinner } from "mdb-react-ui-kit";
import axios from "axios";

const Homepage = () => {

    const [getUser, setGetUser] = useState();


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                setGetUser(persons);
            })
    }, []);

    return (
        <div className="container" style={{ marginTop: "150px" }}>
            <MDBTable>
                <MDBTableHead dark>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Website</th>
                        <th scope="col">Action</th>
                    </tr>
                </MDBTableHead>
                {getUser && getUser.map((item, index) => (
                    <MDBTableBody key={index}>
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td scope="row">{item.name}</td>
                            <td scope="row">{item.email}</td>
                            <td scope="row">{item.phone}</td>
                            <td scope="row">{item.username}</td>
                            <td scope="row">{item.website}</td>
                            <td>
                                {/* <MDBBtn className="m-1" tag="a" color="none" onClick={() => handleDelete(item.id)}>
                            <MDBTooltip title="Delete" tag="a">
                                <MDBIcon fas icon="trash" style={{ color: "#dd4b39", size: "lg" }} />
                            </MDBTooltip>
                        </MDBBtn>{"  "}
                        <Link to={`/edituser/${item.id}`}>
                            <MDBTooltip title="Edit" tag="a">
                                <MDBIcon fas icon="pen" style={{ color: "#55acee", size: "lg" , marginBottom :"10px" }} />
                            </MDBTooltip>
                        </Link>{"  "} */}

                                {/* <Link to={`/userInfo/${item.id}`}> */}
                                <MDBTooltip title="View" tag="a">
                                    <MDBIcon fas icon="eye" style={{ color: "#3b5998", size: "lg", marginBottom: "10px" }} />
                                </MDBTooltip>
                                {/* </Link> */}
                            </td>
                        </tr>
                    </MDBTableBody>
                ))}
            </MDBTable>
        </div>
    )
}

export default Homepage