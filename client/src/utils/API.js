import axios from "axios";

export default {
  // Gets all books
  getStories: function(searchTerm, startYear, endYear) {
    return axios.get(`/api/search/${searchTerm}/${startYear}/${endYear}`);
     },
  // Deletes the book with the given id
  deleteStory: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  saveStory: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};