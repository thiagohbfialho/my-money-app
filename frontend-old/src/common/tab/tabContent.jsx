import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import If from "../operador/if";

class TabContent extends Component {
    render(){
        const select = this.props.tab.selected === this.props.id
        const visible = this.props.tab.visible[this.props.id]
        return (
            <If test={visible}>
                <div id={this.props.id}
                    className={`tab-pane ${select ? 'active' : ''}`}>
                    {this.props.children}
                </div>
            </If>
        )
    }
}

const mapStateToProps = state => ({tab: state.tab})
export default connect(mapStateToProps)(TabContent)