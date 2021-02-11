import React, { Component } from "react";
import WebMail from "./webmail/webmail";
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }
    render() {
        return (
            <div className="container">
                <div className="headerArea">
                    header
                </div>
                {/* <div className="leftsideBar">
                    sidebar
                </div> */}
                <WebMail />
                <div className="footerArea">
                    footer
                </div>
            </div>
        )
    }
}
export default App;