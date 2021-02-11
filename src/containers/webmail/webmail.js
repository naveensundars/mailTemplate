import React, { Component } from "react";
import "./webmail.scss";
class WebMail extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }
    render() {
        return (
            <div className="webmailBody">
                <div className="webmailLeftSide">
                    <input placeholder="Search Mail and People" className="filterMail"></input>
                    <div className="webmailLeftList">
                        <ul>
                            <li className="treeList"><div className="webmailLeftListText">
                                <svg aria-hidden="true" viewBox="0 0 26 26" focusable="false" className="icon-bookmark-20">
                                    <use href="#exprand"></use>
                                </svg>
                                Favorites</div>
                                <ul>
                                    <li><div className="webmailLeftListInner">Inbox <label className="mailCount">20</label></div></li>
                                    <li><div className="webmailLeftListInner">Sales Reports <label className="mailCount">10</label></div></li>
                                    <li><div className="webmailLeftListInner">Personnel <label className="mailCount">15</label></div></li>
                                    <li><div className="webmailLeftListInner">Marketing Reports <label className="mailCount">2</label></div></li>
                                    <li><div className="webmailLeftListInner">Sent Items <label className="mailCount">20</label></div></li>
                                </ul>
                            </li>
                            <li className="treeList"><div className="webmailLeftListText">
                                <svg aria-hidden="true" viewBox="0 0 26 26" focusable="false" className="icon-bookmark-20">
                                    <use href="#exprand"></use>
                                </svg>
                                Andrew Fuller</div>
                                <ul>
                                    <li><div className="webmailLeftListInner">Inbox</div></li>
                                    <li><div className="webmailLeftListInner">Culter</div></li>
                                    <li><div className="webmailLeftListInner">Drafts</div></li>
                                    <li><div className="webmailLeftListInner">Sent Items</div></li>
                                    <li><div className="webmailLeftListInner">Archive</div></li>
                                    <li><div className="webmailLeftListInner">Junk Mail</div></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="webmailRightSide">
                    <div className="webmailRightSideHeader"></div>
                    <div className="RightSideInner">
                        <div className="RightSideLeft">
                            <div className="RightSideLeftHeader">
                                <h1>Inbox</h1>
                            </div>
                            <ul>
                                <li>
                                    <div className="emailTemplateListArea mailUnread">
                                        <div className="emailTemplateList">
                                            <h2>Diana Hansan</h2>
                                            <p className="mailSubject">New business relationship confirmation</p>
                                            <p className="mailBodyList">Hi Kerry Best,</p>
                                        </div>
                                        <div className="emailTemplateTime">4:58 AM</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="emailTemplateListArea">
                                        <div className="emailTemplateList">
                                            <h2>Diana Hansan</h2>
                                            <p className="mailSubject">New business relationship confirmation</p>
                                            <p className="mailBodyList">Hi Kerry Best,</p>
                                        </div>
                                        <div className="emailTemplateTime">4:58 AM</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="emailTemplateListArea mailUnread">
                                        <div className="emailTemplateList">
                                            <h2>Diana Hansan</h2>
                                            <p className="mailSubject">New business relationship confirmation</p>
                                            <p className="mailBodyList">Hi Kerry Best,</p>
                                        </div>
                                        <div className="emailTemplateTime">4:58 AM</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="emailTemplateListArea">
                                        <div className="emailTemplateList">
                                            <h2>Diana Hansan</h2>
                                            <p className="mailSubject">New business relationship confirmation</p>
                                            <p className="mailBodyList">Hi Kerry Best,</p>
                                        </div>
                                        <div className="emailTemplateTime">4:58 AM</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default WebMail;