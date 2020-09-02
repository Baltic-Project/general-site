import React from "react"
import styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby"
import Slider from "../components/Carousel"
import ButtonRadius from "../components/Button"
import Tabs from "../components/TabBrand"
import Popup from "../components/Popup/Popup"
import RichText from "../components/RichText/RichText"
import Example from "../components/Modal/Modal"
import Quotes from "../components/Quotes/Quotes"
import Accordion from '../components/Accordion/Accordion'



const Section = styled.section`
    width:100%;
    max-width:1200px;
    margin:auto;
`;


const IndexPage = () => {
  // const gatsbyRepoData = useStaticQuery(graphql`
  // query {
  //   example{
  //     count
  //     next
  //   }    
     
  //   }
  // `)
  return (
   <>
    <Section>    
      <p>
        Build Time Data: Gatsby repo{` `}
        <p >
          {/* {gatsbyRepoData.example.count} <br />
          {gatsbyRepoData.example.next} */}
        </p>
      </p>
      <Slider></Slider>
      <ButtonRadius></ButtonRadius>
      {/* <Tabs></Tabs> */}
      <RichText></RichText>
      <Example></Example>
      <Quotes></Quotes>
      <Popup></Popup>
    </Section>
    </>
  )
}
export default IndexPage
