import React from 'react';

const MessageParser = ({ children, actions }) => {
    // console.log(children.props.state)
    const { checker } = children.props.state;
    const parse = (message) => {
        if (checker === "age" && message.length > 0) {
            actions.afterNameMessage();
            children.props.state.userData.name = message;
        }

        

        if(checker === "travel" && message.length >= 3 && !Number(message) && ( message === "Yes" || message === "YES" || message === "yes") ) {
            actions.afterPlace();
        }

        if(checker === "travel" &&  !Number(message) && (message === "No" || message === "NO" || message === "no")){
            actions.noask()
        }

        if (checker === "preference" && Number(message)) {
            actions.afterNopeople();
            children.props.state.userData.people = message;
        }

        if(checker === "final" && Number(message)){
            actions.afterAgeMessage();
            if(message <= 200000){
                children.props.state.userData.category = "middle"
            }else if(message >= 200000 && message <= 350000){
                children.props.state.userData.category = "primum"
            }else{
                children.props.state.userData.category= "luxuary"
            }
        }

        if(checker === "money"){
            actions.finelNumber();
        }


    }
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;
