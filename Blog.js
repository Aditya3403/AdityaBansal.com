import React from 'react';

function Blog(props){
    return(
      <>
      <h1 style={{color:props.theme==="dark"? "white":"black"}}>This is a Blog page.</h1>
      
      </>
    );
}

export default Blog;