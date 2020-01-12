import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    onChange(event) {
        this.setState({[event.target.name]: event.target.value})
    };

    onSubmit(event) {
        event.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }
        
        this.props.createPost(post);

    };

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <lable>Title: </lable>
                        <br />
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <div>
                        <lable>Body: </lable>
                        <br />
                        <textarea name="body" onChange={this.onChange} value={this.state.body}/>
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);