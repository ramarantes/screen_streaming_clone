import React from 'react'

export default class GoogleAuth extends React.Component{
    state = {isSignedIn:null};
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '735095963291-ubst0vvktj1og4u4nd8rurqit6p173jj.apps.googleusercontent.com',
                scope:'email'
            }).then( () => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange();
                this.auth.isSignedIn.listen(this.onAuthChange)
            });
        });
        
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
    }

    onSignIn = () => this.auth.signIn();
    onSignOut = () => this.auth.signOut();

    renderAuthButton(){
        if(this.state.isSignedIn===null)
            return <div>check logging...</div>;
        else if(this.state.isSignedIn)
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