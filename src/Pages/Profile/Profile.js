import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import client from "../../Utils/Connection";
import { Image } from "./Profile.style";
import { ProfileContainer } from "./Profile.style";
import { ContainerInfo } from "./Profile.style";
import { Info } from "./Profile.style";
import { ProfileColumn } from "./Profile.style";
import { ProfileWrapper } from "./Profile.style";
import pic from "../../../src/Assets/Images/png/icon1.png";
export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  useEffect(() => {
    client.get("auth/user").then((user) => {
      setUser(user.data);
      console.log(user.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <ProfileWrapper>
        <ProfileColumn>
          <ProfileContainer></ProfileContainer>
          <Image src={pic}></Image>
          <ContainerInfo>
            <h3 id="name">
              <Info>{user.fname}</Info>
            </h3>
          </ContainerInfo>
        </ProfileColumn>
        <ProfileColumn>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Full Name</h6>
              </div>
              <div className="col-sm-9">
                <b>{user.fname + " " + user.lname}</b>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-9 ">
                <b>{user.email}</b>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Mobile</h6>
              </div>
              <div className="col-sm-9 ">
                <b>{user.mobile}</b>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Address</h6>
              </div>
              <div className="col-sm-9 ">
                <b>{user.address}</b>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Date of Register</h6>
            </div>
            <div className="col-sm-9 ">
              <b>{user.register_date}</b>
            </div>
          </div>
          <hr></hr>
        </ProfileColumn>
      </ProfileWrapper>
    );
  }
}
