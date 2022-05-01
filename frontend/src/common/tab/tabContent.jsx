import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class TabContent extends Component {
    render(){
        const select = this.props.tab.selected === this.props.id
        return (
            <div id={this.props.id}
                className={`tab-pane ${select ? 'active' : ''}`}>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = state => ({tab: state.tab})
export default connect(mapStateToProps)(TabContent)