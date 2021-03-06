import React, { Component } from 'react'
import jwt_decode from 'jwt-decode';
import styled  from "styled-components";
import StyledCard from './ChangeLight';

class Mountains extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      last_name: '',
      premium: '',
      admin: '',
    }
  }

  componentDidMount() {
    if(!localStorage.usertoken) {
      // return this.props.history.push(`/login`)
    } 
    else {
      const token = localStorage.usertoken
      const decoded = jwt_decode(token)
      this.setState({
        username: decoded.username,
        premium: decoded.premium,
        admin: decoded.admin,
      })
    }
  }

  forwarding = (e) => {
    if(this.state.admin===undefined){
      localStorage.removeItem('usertoken')  //wylogowanie
      return console.log("MUSIC")//this.props.history.push(`/login`)
    }
    setTimeout(() => {
      if(!this.state.admin){
        return  window.location = '/profile';
      }
      if(!this.state.premium){
        return  window.location = '/profile';
      }
  }, 3000);
    return <div style={{textAlign: 'center', marginTop: '20px'}}> 404 Brak dostępu</div>
    
  }
  container = () => {
    return(
      <>
      <StyledCard>
              <StyledTitle>Himalaiści 01 Wyprawy 1939-1980</StyledTitle>
               <StyledIframe width="560" height="315" src="https://www.youtube.com/embed/QQjsy_zmO6Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe>
      </StyledCard>
           
      </>
    )
  }

  // <StyledTitle>Himalaiści 01 Wyprawy 1939-1980</StyledTitle>
  //             <StyledIframe width="560" height="315" src="https://www.youtube.com/embed/QQjsy_zmO6Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe>
  //             <StyledTitle>K2 Abruzzi Route Climbing 2018</StyledTitle>
  //             <StyledIframe width="560" height="315" src="https://www.youtube.com/embed/l-dMVvvIt8M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe>
  //             <StyledTitle>Climb K2 in 3D!</StyledTitle>
  //             <StyledIframe width="560" height="315" src="https://www.youtube.com/embed/UF-wlAEC3f4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe>
  //             <StyledTitle>Everest - Zapłacili krocie żeby go zdobyć! Tragiczny finał komercyjnej wyprawy.</StyledTitle>
  //             <StyledIframe width="560" height="315" src="https://www.youtube.com/embed/HT87DvkBS3g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe>
  //             <StyledTitle>K2 The Killer Summit (Documentary)</StyledTitle>
  //             <StyledIframe width="560" height="315" src="https://www.youtube.com/embed/vs307D4KFKU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe>
        
  render() {
    return this.state.admin&&this.state.premium?<div>{this.container()}</div>:<div>{this.forwarding()}</div>
}

}

export default Mountains;




const StyledIframe = styled.iframe`
  width: 99%;
  margin: 0px 1px 10px;
  height: 200px;

  @media(min-width: 400px) {
    height: 300px;
    margin: 0px 1px 30px;
  }
  @media(min-width: 500px) {
    height: 400px;
    width: 80%;
    margin: 0px 10% 50px;
  }
  @media(min-width: 800px) {
    width: 700px;
    margin: 0px 10% 50px;
  }
`
const StyledTitle = styled.div`
    text-align:center;
    font-weight: 700;
    margin-bottom: 5px;
    font-size: 12px;
    padding-top: 30px;
    
  @media(min-width: 400px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
  @media(min-width: 500px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
  @media(min-width: 800px) {
    text-align: center;
    width: 700px;
    margin: 0px 10% 10px;
  }
`
