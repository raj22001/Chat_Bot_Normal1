import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const initialAction = () => {
        const message = createChatBotMessage('Hey can i know your name to begin.');
        updateState(message, "age")
    }

    const afterNameMessage = (name) => {
        const message = createChatBotMessage(`Hey Can fill given details so i can suggest some thing! (YES or NO)`)
        updateState(message, "travel")
    }

    const afterPlace = () => {
        const message = createChatBotMessage("Number of people travel with you.")
        updateState(message , "preference")
    }

    const noask = () => {
        const message = createChatBotMessage("Can't suggest you need to feel the information ")
        updateState(message)
    }

    const afterNopeople = () => {
        const message = createChatBotMessage("Can u tell me total estimated bugget e.x(200000)")
        updateState(message, "money")
    }

    const afterAgeMessage = () => {
        const message = createChatBotMessage("This are some suggestion according to your information", {
            widget: "startSlow"
        })
        updateState(message )
    }

    const finalResult = (name, people , preference, vehicle) => {
        const message = createChatBotMessage(`Got it, ${name}! Based on total number of people ${people} and month ${preference} we  recommend the '${vehicle}.' Enjoy the weekend`, {
            widget: "finalImage"
        })
        updateState(message)
    }

    const finelNumber = () => {
        const message = createChatBotMessage("Can you share your Number. so our team contect with you ")
        updateState(message , "final")
    }

    const updateState = (message, checker) => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
            checker,
        }))
    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        initialAction,
                        afterNameMessage,
                        afterPlace,
                        noask,
                        afterNopeople,
                        afterAgeMessage,
                        finalResult,
                        finelNumber
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;