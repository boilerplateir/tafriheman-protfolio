import React, {
    Component
} from 'react';

import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        axios.post('/api/auth/signin', this.state)
            .then(response => {
                console.log('response :', response);
                if (response.data.message === 'success') {
                    this.props.history.push("/products")
                } else {
                    alert('email or password invalid!');
                }
            }).catch((error) => {
                throw error;
            })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <form className="form-signin">
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label for="inputEmail" >Email address</label>
                        <input value={this.state.email} onChange={this.handleChange.bind(this)} type="email" name="email" className="form-control" placeholder="Email address"/>
                        <br />
                        <label for="inputPassword">Password</label>
                        <input value={this.state.password} onChange={this.handleChange.bind(this)} type="password" name="password" className="form-control" placeholder="Password"/>
                        <br />
                        <button onClick={this.handleSubmit.bind(this)} className="btn btn-lg btn-primary btn-block" type="button">Sign in</button>                        
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;