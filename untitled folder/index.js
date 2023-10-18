// Function to create a new post and append it to the posts section
function createPost(title, content) {
    const postsSection = document.getElementById("posts");
  
    const postElement = document.createElement("article");
    postElement.innerHTML = `
      <h2>${title}</h2>
      <p>${content}</p>
      <hr>
    `;
  
    postsSection.appendChild(postElement);
  }
  
  // Example post data (you can replace these with your actual post content)
  const postTitle = "Exciting Sports Event!";
  const postContent = "Join us on August 15th for an action-packed sports event. Don't miss the thrill and excitement!";

  
  // Call the createPost function with the example post data
  createPost(postTitle, postContent);
  createPost("Another Sports Event!", "Join us on September 1st for the other sports event")
  
  
  