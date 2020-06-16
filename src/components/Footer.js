import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import TextError from "../components/TextError";
import TextSuccess from "../components/TextSuccess";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  company: Yup.string(),
  email: Yup.string().email("Invalid email format").required("Required"),
  honeypot: Yup.string(),
});

const Footer = () => {
  const [isSent, setIsSent] = useState(false);

  const onSubmit = (values) => {
    if (values.honeypot) {
      console.log("Filthy bot!");
    } else {
      axios
        .post(
          "https://0vp7fnh852.execute-api.us-east-1.amazonaws.com/test/contactform",
          {
            name: `${values.name}`,
            emailAddress: `${values.email}`,
            message: `${values.company}`,
          }
        )
        .then((res) => {
          console.log(res);
          setIsSent(true);
        });
    }
  };

  return (
    <FooterWrapper>
      <div className='grid-container'>
        <div className='left-section'>
          <ul className='link-section'>
            <li>
              <AniLink to='/'>About PYGO</AniLink>
            </li>
            <li>
              <AniLink to='/'>News</AniLink>
            </li>
            <li>
              <AniLink to='/'>Terms of service</AniLink>
            </li>
            <li>
              <AniLink to='/'>Privacy policy</AniLink>
            </li>
            <li>
              <AniLink to='/'>Case Studies</AniLink>
            </li>
            <li>
              <AniLink to='/'>Contact sales</AniLink>
            </li>
            <li>
              <AniLink to='/'>Legal</AniLink>
            </li>
          </ul>
          <h1>PYGO Inc.</h1>
          <p>Copyright © 2020 PYGO Inc. All rights reserved.</p>
        </div>

        <Formik
          initialValues={{
            name: "",
            company: "",
            email: "",
            honeypot: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          <Form className='form-section'>
            <div className='form-control'>
              <h2>Stay up-to-date</h2>
              <p>Sign up to receive our newsletter</p>
            </div>
            <div className='form-control'>
              <Field type='text' id='name' name='name' placeholder='Name' />
              <ErrorMessage name='name' component={TextError} />
            </div>
            <div className='form-control'>
              <Field
                type='text'
                id='company'
                name='company'
                placeholder='Company (Optional)'
              />
            </div>
            <div className='form-control'>
              <Field type='text' id='email' name='email' placeholder='Email' />
              <ErrorMessage name='email' component={TextError} />
            </div>
            {isSent && (
              <TextSuccess>Sent! We will get back to you soon.</TextSuccess>
            )}
            <div className='honey-pot'>
              <Field type='text' id='honeypot' name='honeypot' />
            </div>
            <button className='button' type='submit'>
              Subscribe
            </button>
          </Form>
        </Formik>

        {/* <form className='form-section' action=''>
          <h2>Stay up-to-date</h2>
          <p>Sign up to receive our newsletter</p>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Company(Optional)' />
          <input type='text' placeholder='Email' />
          <a href='' target='_blank' className='button'>
            Subscribe
          </a>
        </form> */}
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  padding: 120px 0px;
  background: #4a4a4a;
  color: #fff;

  .grid-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    .left-section {
      h1 {
        color: white;
        font-family: liberation-serif, sans-serif;
        font-weight: lighter;
      }
      flex-grow: 3;
      padding: 2rem;

      .link-section {
        margin-bottom: 60px;

        li {
          position: relative;
          font-family: open-sans, sans-serif;
          @media (min-width: 1024px) {
            width: inherit;
            list-style-type: none;
            margin: 20px 0;
          }
          a {
            color: white;
            border-bottom: solid 2px transparent;
            transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
          }
        }

        li:hover {
          a {
            border-bottom: solid 2px white;
          }
        }
      }
    }

    .form-section {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      padding: 1rem 3rem 1rem 9rem;
      border-left: solid 1px grey;

      p {
        margin-bottom: 1.5rem;
      }

      input {
        border-radius: 0;
        background: transparent;
        height: 2.5rem;
        font-size: 0.8rem;
        font-style: italic;
        margin-bottom: 1.5rem;
        border: none;
        border-bottom: 1px solid rgba(231, 230, 228, 0.6);
        color: #fff;
        transition: border 0.2s linear;
        width: 100%;
        font-family: open-sans, sans-serif;
      }

      input:focus {
        border-bottom: 1px solid #fff;
      }

      .honey-pot {
        visibility: hidden;
      }
    }
  }

  @media (max-width: 1024px) {
    li {
      list-style-type: none;
      margin-bottom: 1.5rem;
    }
  }

  /* tablet */
  @media (max-width: 768px) {
    padding: 60px 15px;

    .grid-container {
      flex-direction: column;

      li {
        list-style-type: none;
        margin-bottom: 1rem;
      }

      .form-section {
        border-left: none;
        padding: 1rem;

        button {
          width: 100%;
        }
      }
    }
  }
`;

export default Footer;
