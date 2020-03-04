import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component{
    
    state = {
        isSignedIn: null
    }

    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: '28106910442-vka1p48ntduntsu35ab8hmcnq79cqnij.apps.googleusercontent.com',
                scope:'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onSignInClick = () =>{
        this.auth.signIn();
    };

    onSignOutClick = () =>{
        this.auth.signOut();
    };

    onAuthChange = isSignedIn => {

        if(isSignedIn) this.props.signIn(this.auth.currentUser.get().getId());
        else this.props.signOut();

        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    }

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return (
                <button onClick={this.onSignInClick} className="ui google red button">
                    <i className="google icon"></i>
                    Sign In Google
                </button>
            );
        }
        else if(this.props.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="ui google red button">
                    <i className="google icon"></i>
                    Sign Out
                </button>
            );
        }
        else return (
            <button onClick={this.onSignInClick} className="ui google red button">
                <i className="google icon"></i>
                Sign In
            </button>
        );;
    }
    render(){
        return(
            <div>{this.renderAuthButton()}</div>
            
        );
    }
}

const mapStateToProps = (state) =>{
    return{ isSignedIn:state.auth.isSignedIn }
};

export default connect(
    mapStateToProps,
    { signIn,signOut }
)(GoogleAuth);