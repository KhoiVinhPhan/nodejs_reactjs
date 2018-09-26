function Comment(props){
    return (
        <div className="Comment">
            //Image and info user
            <div className="UserInfo">
                <img
                    className="Avatar"
                    src={props.author.avartarUrl}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            //info text and date
            <div className="Comment-text">
                
            </div>
        </div>
    );
}

ReactDOM.render(
    element
    ,document.getElementById('root')
);