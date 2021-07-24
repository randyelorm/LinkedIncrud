
import "./middle.css"
import profile_img from "../../Images/profile.jpeg"
import AllPost from "../ALL_POST/AllPost"
import InputForm from "../INPUTFORM/InputForm"

import React, { Component } from 'react';

class MiddleColumn extends Component {

    constructor (props) {
            super (props)

            this.state = {
                posted: [

                ]
            }
    }


    handleAddPost = (addPost)=> {
        addPost.id = Math.random().toString()
        this.setState({
            posted: [...this.state.posted, addPost]
        })
    }

    handleDelete = (selected_post_id)=> {
        let notdeletedpost = this.state.posted.filter(
            (each_post_id_in_array)=> {
              return each_post_id_in_array.id !== selected_post_id
            }
        )
        this.setState({
            posted: notdeletedpost
        })
    }

    handleEdit = (selected_id, Updated_post)=> {

        this.setState({
            posted: this.state.posted.map(
                (each_post)=> {
                  return  each_post.id === selected_id? Updated_post: each_post
                }
            )
        })

    }

    render() {
        return (
            <div className = "middle-box col-sm-6">
               
                
                 <InputForm addPostFunction = {this.handleAddPost} />
                <AllPost arraydata = {this.state.posted} selected_id = {this.handleDelete} editPost = {this.handleEdit} />  

                
               
            </div>
        );
    }
}

export default MiddleColumn;













