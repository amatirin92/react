import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/header.js";
import Article from "./components/article.js"
import "./css/index.css";

class App extends React.Component {
    constructor(){
        super();
        this.articles=[
            {title: "David Bowie", src: "http://www.evolutionsupply.com/_Images-ExistingES/poodleface.jpg"},
            {title: "Dog 2", src: "http://cdn3-www.dogtime.com/assets/uploads/2009/06/bolognese-dog.jpg"}
        ];
    }
    render(){
        return (
        <div>
            <Header />
            {this.articles.map((item) => <Article title={item.title} src={item.src}/>)}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));