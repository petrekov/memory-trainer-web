import { render } from "@testing-library/react";
import { Component, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { ApiCommunicator } from "../api/ApiCommunicator";
import { ApiRoutes } from "../constants/ApiRoutes";
import { Names } from "../constants/Names";
import { Routes } from "../constants/Routes";
import history from "../History";

interface TrainWordsState {
    numberOptions: string[];
    rightNumber: string;
    guessingWord: string;
  }

class TrainWords extends Component {


    /**
     *
     */
    constructor(props:any) {
        super(props);
    }

    state: TrainWordsState = {
        guessingWord: "1",
        numberOptions: ["1"],
        rightNumber: "1"
    }



    guessNumber = (value : string) =>{
        if(this.state.rightNumber === value){
            toast("Right answer!",{type:"success"});

            ApiCommunicator.CallGet<TrainWordsState>(ApiRoutes.GetNewWords, (data: TrainWordsState) => {
                console.log(this.state);
                this.setState({guessingWord: "",
                numberOptions: [""],
                rightNumber: ""});
                this.setState(data);
                console.log(this.state);
                console.log("------------------------------");
            });

            //this.forceUpdate();
        }else{
            toast("Wrong answer!",{type:"error"});
        }
    }

    render() {
        return (
            <div>
                <div className="row" style={{ marginTop: "50px" }}>
                    <div className="col-2"></div>
                    <div className="col-8" style={{ fontSize: "50px", textAlign: "center", fontWeight: "bold", fontStyle: "italic" }}>{this.state.guessingWord}</div>
                    <div className="col-2"></div>
                </div>

                <div className="row" style={{ marginTop: "30px" }}>
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="row">
                            {this.state.numberOptions.map((item, index) => (
                                <div key={item} className="col-4" style={{ marginTop: "25px" }}>
                                    <button
                                        onClick={ () => {this.guessNumber(item)}}
                                        className="btn btn-primary" style={{ width: "100%", height: "150px", fontSize: "70px" }} >{item}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        );
    }
};

export default TrainWords;