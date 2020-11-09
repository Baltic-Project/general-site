import React, { useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { graphql } from "gatsby"
import { Link } from "gatsby"
// import food1 from '../../assets/images/food3.png'
// import food2 from '../../assets/images/food5.png'
// import ice1 from '../../assets/images/ice3.png'
// import ice2 from '../../assets/images/ice5.png'
// import beauty1 from '../../assets/images/beauty3.png'
// import beauty2 from '../../assets/images/beauty5.png'
// import hc1 from '../../assets/images/hc3.png'
// import hc2 from '../../assets/images/hc5.png'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import Spoon from '../../assets/images/spoon.jpg'
import Bird from '../../assets/images/bird.jpg'
import Clothes from '../../assets/images/clothes.jpg'
import Sun from '../../assets/images/sun.jpg'
import Lipton from '../../assets/images/lipton-logo.png'
import Pukka from '../../assets/images/pukka-logo.png'
import Knorr from '../../assets/images/logo-knorr.png'
import Hellmanns from '../../assets/images/hellmanns-logo.png'
import Magnum from '../../assets/images/magnum-logo.png'
import BenAndJerrys from '../../assets/images/ben-and-jerrys-logo.png'
import Idull from '../../assets/images/ingman-logo.png'
import SuperViva from '../../assets/images/ingman-logo.png'
import Dove from '../../assets/images/dove-logo.png'
import Rexona from '../../assets/images/rexona-logo.png'
import Lbp from '../../assets/images/lbp-logo.png'
import Domestos from '../../assets/images/domestos-logo.png'
import Cif from '../../assets/images/cif-logo.png'
import SeventhGeneration from '../../assets/images/sevent-generation-logo.png'


const TABS = [
  { text: 'Toidukaubad', color_active: `rgb(0, 215, 197)`, color_inactive: `rgb(116, 233, 223)` },
  { text: 'Jäätis', color_active: `rgb(255, 228, 3)`, color_inactive: `rgb(237, 230, 172)` },
  { text: 'Ilu ja hügieen', color_active: `rgb(255, 121, 198)`, color_inactive: `rgb(239, 176, 212)` },
  { text: 'Kodukeemia', color_active: `rgb(0, 94, 238)`, color_inactive: `rgb(122, 164, 228)` },
]


export default class extends React.Component{
    constructor() {
      super();
      this.state = { tabIndex: 0 };
    }

    isTabActive(i) {
      return this.state.tabIndex === i
    }
    
    render() {
      return (
        <Tabs onSelect={i => {
          this.setState({tabIndex : i})
        }}>
            
            <Link to="#meie-kaubamargid">
              <TabList>
                {TABS.map(({text, color_active, color_inactive }, i) => (
                  <Tab
                    key={`tab-${i}`}
                    style={{ background: this.isTabActive(i) ? `${color_active}` : `${color_inactive}` }}
                  >
                      <p style={{color: this.isTabActive(i) ? `#fff` : `#808080`, fontSize: `1.5rem`}} >
                        {text}
                      </p>

                  </Tab>
                  ))}
              </TabList>
            </Link>

            <TabPanel style={{backgroundImage: `url(${Spoon})`}}>
                <Link to="/lipton-index"><img src={Lipton} alt="Lipton Logo"></img></Link>
                <Link to="/"><img src={Knorr} alt="Knorr Logo"></img></Link>
                <Link to="/"><img src={Hellmanns} alt="Hellmann's Logo"></img></Link>
                <Link to="/"><img src={Pukka} alt="Pukka Logo"></img></Link>
            </TabPanel>

            <TabPanel style={{backgroundImage: `url(${Sun})`}}>
                <Link to="/"><img src={Magnum} alt="Magnum Logo"></img></Link>
                <Link to="/"><img src={BenAndJerrys} alt="Ben and Jerry's Logo"></img></Link>
                <Link to="/"><img src={Idull} alt="Idüll Logo"></img></Link>
                <Link to="/"><img src={SuperViva} alt="Super Viva Logo"></img></Link>
            </TabPanel>

            <TabPanel style={{backgroundImage: `url(${Bird})`}}>
                <Link to="/"><img src={Dove} alt="Dove Logo"></img></Link>
                <Link to="/"><img src={Rexona} alt="Rexona Logo"></img></Link>
                <Link to="/"><img src={Lbp} alt="Love Beauty and Planet Logo"></img></Link>
            </TabPanel>

            <TabPanel style={{backgroundImage: `url(${Clothes})`}}>
                <Link to="/"><img src={Domestos} alt="Domestos Logo"></img></Link>
                <Link to="/"><img src={Cif} alt="Cif Logo"></img></Link>
                <Link to="/"><img src={SeventhGeneration} alt="Seventh Generation Logo"></img></Link>
            </TabPanel>
        </Tabs>
      );
    }
  }




// const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

// export const query = graphql`
//   {
//     __typename
//     file(name: {eq: "hellmans-logo"}) {
//         childImageSharp {
//           fluid(maxWidth: 150, maxHeight: 100, quality: 90) {
//             src
//             srcSet
//             sizes
//           }
//         }
//   }
// `