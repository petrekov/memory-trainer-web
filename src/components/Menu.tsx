import { render } from "@testing-library/react";
import { Component, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Names } from "../constants/Names";
import { Routes } from "../constants/Routes";
import history from "../History";

class Menu extends Component {
    render() {
        return (
            <div>
                <div className="row" style={{ marginTop: "50px" }}>
                    <div className="col-1"></div>
                    <div className="col-5">
                        <Link to={"/" + Routes.TrainMemory}>
                            <button className="btn btn-primary" style={{ width: "100%", height: "150px" }}>{Names.TrainMemory}</button>
                        </Link>
                    </div>
                    <div className="col-5">
                        <Link to={"/" + Routes.TrainWords}>
                            <button className="btn btn-primary" style={{ width: "100%", height: "150px" }}>{Names.TrainWords}</button>
                        </Link>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row" style={{ marginTop: "50px" }}>
                    <div className="col-1"></div>
                    <div className="col-5">
                        <Link to={"/" + Routes.Profile}>
                            <button className="btn btn-primary" style={{ width: "100%", height: "150px" }}>{Names.Profile}</button>
                        </Link>
                    </div>
                    <div className="col-5">
                        <Link to={"/" + Routes.RedefineWords}>
                            <button className="btn btn-primary" style={{ width: "100%", height: "150px" }}>{Names.RedefineWords}</button>
                        </Link>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        );
    }
};

export default Menu;