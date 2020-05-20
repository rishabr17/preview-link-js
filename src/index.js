import React, { Component } from 'react';
import Popup from 'reactjs-popup'

export default class PreviewLink extends Component {

    state = {
        response:"",
        position:"bottom left"
    }


    componentWillMount = () =>{
        this.fetchHTML();
    }

    fetchHTML = () => {
        if(this.state.response == ""){
            var  getHTMLRequest = new XMLHttpRequest();                                             
            getHTMLRequest.onreadystatechange = () => {
                if(getHTMLRequest.response != null && getHTMLRequest.response.length > 0){
                    this.setState({response: getHTMLRequest.response[0]})
                    console.log(this.state.response);
                }
            }
            getHTMLRequest.open('POST', 'https://node-link-scraper.herokuapp.com/', true); 
            getHTMLRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            getHTMLRequest.send(JSON.stringify({ "text": this.props.href }));
            getHTMLRequest.responseType = 'json';
        }
    }

    componentDidMount = () =>{
        console.log(document.getElementById(this.props.children))
        console.log(document.getElementById(this.props.children).getBoundingClientRect().left)
        console.log(window.innerWidth/2)
        if(document.getElementById(this.props.children).getBoundingClientRect().left < window.innerWidth/2){
                this.setState({position:"bottom left"})
        }else{
                this.setState({position:"bottom right"})
        }
    }

  render(){
    return (
        <div onMouseEnter={this.mouseEnterEvent}
            onMouseLeave={this.mouseLeaveEvent} 
            style={this.props.style} 
            className={this.props.className}>
                <Popup arrowStyle={{height:"0px", display:"none"}} id="preview-link-popup" mouseEnterDelay="0" mouseLeaveDelay="100" contentStyle={{width:"fit-content", maxWidth:"50vw", padding:"15px", paddingRight:"25px"}} position={this.state.position} on="hover" trigger={<a id={this.props.children} href={this.props.href}>{this.props.children}</a>} >
                    {this.state.response != null
                        ? <div >
                            <img style={{height:"110px", paddingRight:"15px", float:"left"}} 
                                src={this.state.response.image != undefined
                                    ? this.state.response.image
                                    : this.state.response.favicon != undefined
                                        ? this.state.response.favicon
                                        : ""}></img>
                            <p style={{padding:"0px", lineHeight:"1.25em", margin:"0px", paddingBottom:"5px", fontWeight:"500", fontSize:"95%"}}>{this.state.response.title}</p>
                            <hr style={{padding:"0px", margin:"2px 0px", border:"0px", height:"1px", backgroundColor:"#ecf0f1"}}></hr>
                            <p style={{display:"block", padding:"5px", lineHeight:"1.25em", fontWeight:"500", margin:"0px", fontSize:"75%"}}>{this.state.response.url}</p>
                            <p style={{display:"flow-root", padding:"0px", lineHeight:"1.5em", fontWeight:"300", margin:"0px", fontSize:"75%"}}>{this.state.response.description}</p>
                        </div>
                        : <div></div>
                    }
                </Popup>
        </div>
    );
  }
}