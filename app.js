import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement('div',
{
    id:'Parent'
},
[
    React.createElement('div',
{id:'Child1'},
[
    React.createElement('h1',{style:{background:'red',color:'white'}},'I am an H1 Tag'),
    React.createElement('h2',{},'I am an H2 Tag')
]
),
React.createElement('div',
{id:'Child2'},
[
    React.createElement('h1',{},'I am an H1 Tag'),
    React.createElement('h2',{},'I am an H2 Tag')
]
)
]
);
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(parent);