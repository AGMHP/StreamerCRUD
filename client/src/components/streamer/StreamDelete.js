import React from 'react';
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";

import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends React.Component{

    componentDidMount = () =>{
        this.props.fetchStream(this.props.match.params.id);
    }

    deleter = () =>{
        this.props.deleteStream(this.props.match.params.id); 
        history.push("/");
    }

    renderActions = () =>{
        return (
            <React.Fragment>
                <button className="ui negative button" 
                    onClick={this.deleter}>Delete
                </button>
                <button className="ui button" onClick={()=>history.push("/")}>Cancel</button>
            </React.Fragment>
        );
    };

    renderContent = (stream) =>{
        if(!stream){
            return "Are you sure you want to delete this stream ?";
        }
        return `Are you sure you want to delete stream with the title : ${stream.title} ?`;
    }
    render(){
        return(
            <Modal 
                title="Delete Stream"
                content={this.renderContent(this.props.stream)}
                actions = {this.renderActions()}
                onDismiss = {()=>{history.push("/")}}
            />
        );
    }    
}

const mapStateToProps = (state, ownProps) =>{
    return {stream : state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, 
{ fetchStream, deleteStream }
)(StreamDelete);