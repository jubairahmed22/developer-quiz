import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog'>
            <h1>What is the purpose of the react router?</h1>
            <h5>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.?</h5>
            <h1>How does context API work?</h1>
            <h5>
                React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
            </h5>
            <h1>useRef hook react.</h1>
            <h5>
                Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with  , React will set its .current property to the corresponding DOM node whenever that node changes.
            </h5>
        </div>
    );
};

export default Blog; <h2>This is blog</h2>