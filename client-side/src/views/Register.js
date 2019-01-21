import React, {
    Component
} from 'react';

import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            lastname: '',
            firstname: ''
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
        axios.post('/api/auth/signup', this.state)
            .then(response => {
                console.log('response :', response);
                this.props.history.push("/")
                return Promise.resolve(response);
            }).catch((error) => {
                throw error;
            })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <form className="form-signin">
                        <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
                        <label>Email address</label>
                        <input type="email" value={this.state.email} onChange={this.handleChange.bind(this)} name="email" className="form-control" placeholder="Email address"/>
                        <br />
                        <label>Firstname</label>
                        <input type="text" value={this.state.firstname} onChange={this.handleChange.bind(this)} name="firstname" className="form-control" placeholder="Firstname"/>
                        <br />
                        <label>Lastname</label>
                        <input type="email" value={this.state.lastname} onChange={this.handleChange.bind(this)} name="lastname" className="form-control" placeholder="Lastname"/>
                        <br />                                                
                        <label>Password</label>
                        <input autoComplete="false" value={this.state.password} onChange={this.handleChange.bind(this)} type="password" name="password" className="form-control" placeholder="Password"/>
                        <br />
                        <button onClick={this.handleSubmit.bind(this)} className="btn btn-lg btn-primary btn-block" type="button">Sign up</button>                        
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;