const Pet = ({name,animal,breed}) => {
    return React.createElement("div",{},[
        React.createElement("h1",{},name),
        React.createElement("h2",{},animal),
        React.createElement("h3",{},breed),

    ]);
}



const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me"),
            React.createElement(Pet, {name: "Luna", animal:"Dog",breed:"Havanese"}),
            React.createElement(Pet, {name: "Pepper", animal:"Bird",breed:"Havanese"}),
            React.createElement(Pet, {name: "Boik", animal:"Bird",breed:"Havan"}),
        ]
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
    );
