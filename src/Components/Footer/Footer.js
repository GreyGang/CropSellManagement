import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";
import { MDBColStyled } from "./Footer.style";
const FooterPage = () => {
  return (
    <MDBFooter
      color="blue-grey"
      className="page-footer font-small lighten-5 pt-0"
    >
      <div
        style={{
          backgroundColor: "#000000",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <MDBContainer>
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol
              md="6"
              lg="5"
              className="text-center text-md-left mb-4 mb-md-0"
            >
              <h6 className="mb-0 white-text">
                Get connected with us on social networks!
              </h6>
            </MDBCol>
            <MDBColStyled md="6" lg="7" className="text-center text-md-right">
              <Link to="/" className="fb-ic ml-0">
                <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
              </Link>
              <Link to="/" className="tw-ic">
                <i className="fab fa-twitter white-text mr-lg-4"> </i>
              </Link>
              <Link to="/" className="gplus-ic">
                <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
              </Link>
              <Link to="/" className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
              </Link>
              <Link to="/" className="ins-ic">
                <i className="fab fa-instagram white-text mr-lg-4"> </i>
              </Link>
            </MDBColStyled>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Company name</strong>
            </h6>

            <p>
              Here you can use rows and columns here to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Products</strong>
            </h6>

            <p>
              <a href="#!" className="dark-grey-text">
                MDBootstrap
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                MDWordPress
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                BrandFlow
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                Bootstrap Angular
              </a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>

            <p>
              <a href="#!" className="dark-grey-text">
                Your Account
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                Become an Affiliate
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                Shipping Rates
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                Help
              </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>

            <p>
              <i className="fa fa-home mr-3" /> New York, NY 10012, US
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@example.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
