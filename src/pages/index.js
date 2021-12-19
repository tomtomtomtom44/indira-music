import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Hello, welcome to my new blog !</p>
      <StaticImage alt="Image d'accueil de Indira"
      src="../images/nazila_welcome.jpg"
      />
    </Layout>
  );
};

export default IndexPage;
