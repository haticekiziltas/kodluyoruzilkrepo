const axios = require("axios");

async function getData(user_id){
    
  
    const { data: user } = await axios(
      `https://jsonplaceholder.typicode.com/users/${user_id}`
    );

    const { data: posts } = await axios(
        `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
      );
    console.log("user", user);
    console.log("posts", posts);
  };

module.exports = getData;