import { render } from "@testing-library/react";
import { Component, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Names } from "../constants/Names";
import { Routes } from "../constants/Routes";
import history from "../History";

class Profile extends Component {
    render() {
        return (
            <div>
                <p>Nothing</p>
            </div>
        );
    }
};

export default Profile;