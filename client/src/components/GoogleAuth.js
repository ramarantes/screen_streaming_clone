import React from 'react'
import {connect} from 'react-redux'
import {signIn, signOut} from '../actions'

class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({ 
                clientId: '735095963291-ubst0vvktj1og4u4nd8rurqit6p173jj.apps.googleusercontent.com',
                scope:'email'
            }).then( () => {
                this.auth = window.gapi.auth2.getAuthInstance();
                //this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange)
            });
        });
        
    }

    onAuthChange = isSignedIn => {
        //this.setState({isSignedIn: this.auth.isSignedIn.get()});
        if(isSignedIn)
            this.props.signIn();
        else
            this.props.signOut();
    }

    onSignIn = () => this.auth.signIn();
    onSignOut = () => this.auth.signOut();

    renderAuthButton(){
        if(this.props.isSignedIn===null)
            return <div>check logging...</div>;
        else if(this.props.isSignedIn)
            return <button className="ui red google button" onClick={this.onSignOut}>
                <i className="google icon">
                    Sign Out
                </i>
            </button>
        else 
            return <button className="ui red google button" onClick={this.onSignIn}>
            <i className="google icon">
                Sign In with google
            </i>
            </button>
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.authReducer.isSignedIn
    }
}

export default connect(mapStateToProps,{signIn, signOut})(GoogleAuth);