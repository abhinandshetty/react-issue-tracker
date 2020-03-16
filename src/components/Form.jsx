import React, { Component } from 'react';
import TextArea from './TextArea';
import RadioButton from './RadioButton';
import Issue from './Issue';

export default class Form extends Component {
    constructor(){
        super();
        this.state = {
            issueText : "",
            issueType : "",
            issueList : []
        };

        this.radioFields = [
            {name: "critical", className: "btn-danger", label:"Critical"},
            {name: "normal", className: "btn-success", label:"Normal"},
            {name: "info", className: "btn-secondary", label:"Info"}
        ];
    }

    onChangeFields = (event) => this.setState({[event.target.name]: event.target.value});

    onSubmit = () => {
        if(this.state.issueText && this.state.issueType) {
            this.setState({issueText : "", issueList : [{issueText : this.state.issueText,issueType :this.state.issueType},...this.state.issueList]});
        } else {
            alert("Input Missing!");
        }
    }

    onClickDeleteIssue = (elem) => {
        const issueList = this.state.issueList;
        issueList.splice(issueList.indexOf(elem), 1);
        this.setState({...this.state, issueList:issueList});
    }

    getIssueList = () => this.state.issueList.map(elem => (
        <Issue 
            class={`${elem.issueType =="critical" ? "btn-danger" : elem.issueType =="normal" ?  "btn-success" : elem.issueType =="info" ?  "btn-secondary" : ""} row text-left mb-2 p-3`}
            issue={elem}
            onClickDeleteIssue = {this.onClickDeleteIssue}
            />
    ));

    getRadioFields = () => this.radioFields.map(element => (
        <RadioButton {...element} onChangeFields={this.onChangeFields} />
    ));

    render() {
      return (
          <div className="container">
              <TextArea onChangeFields={this.onChangeFields} value={this.state.issueText}/>
              <div className="row mb-1">
                  {this.getRadioFields()}
              </div>
              <div className="row mb-3">
                <button type="button" className="btn btn-success w-100" onClick={this.onSubmit}>Submit</button>
            </div>
            {this.getIssueList()}
          </div>
      );
    }
  }