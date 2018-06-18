import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import SaveBtn from "../../components/SaveBtn";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Card from "../../components/Card";


class Stories extends Component {
  state = {
    searchTerm: "",
    startYear: "",
    endYear: "",
    stories: []
  };


  handleInputChange = event => {
  
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.searchTerm && this.state.startYear && this.state.endYear) {
      API.getStories(this.state.searchTerm, this.state.startYear, this.state.endYear)
        .then(res => {
          console.log(res.data.response.docs);
          this.setState({ stories: res.data.response.docs })
        })
        .catch(err => console.log(err));
    };
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1><u>New York Times Story Search</u></h1>
        </Jumbotron>
        <Card header="Search">
          <Container fluid>
            <form>
              <label>Title</label>
              <Input
                value={this.state.searchTerm}
                onChange={this.handleInputChange}
                type="text"
                name="searchTerm"
                placeholder="Search Term (required)"
              />
              <label>Start Year</label>
              <Input
                value={this.state.startYear}
                onChange={this.handleInputChange}
                type="text"
                name="startYear"
                placeholder="Start Year (required)"
              />
              <label>End Year</label>
              <Input
                value={this.state.endYear}
                onChange={this.handleInputChange}
                type="text"
                name="endYear"
                placeholder="End Year (required)"
              />
              <FormBtn
                disabled={!(this.state.searchTerm && this.state.startYear && this.state.endYear)}
                onClick={this.handleFormSubmit}
                
              >
                Search
                  </FormBtn>
            </form>
          </Container>
        </Card>
        <Card header="Results">
          <Container fluid>
            <ul className="list-group">
              {this.state.stories.map((story, index) => (
                <li className="list-group-item" key={index}><a href={story.web_url}>{story.headline.main}</a> <SaveBtn> Save </SaveBtn></li>
              ))}
            </ul>
          </Container>
        </Card>
      </Container>
    );
  } 
}

export default Stories;