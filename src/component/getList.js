  import axios from "axios";

export async function  getList() {

  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  ); 
  return response;
  // return fetch("https://jsonplaceholder.typicode.com/posts").then((data) =>
  //   data.json()
  // );
}
