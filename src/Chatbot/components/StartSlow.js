import React from 'react'

export default function StartSlow(props) {

    console.log(props);
    const preference = (preference) => {
        const { name, people } = props.state.userData;
        props.actions.afterNameMessage = props.state.userData.name 
        const category = props.state.userData.category;
        const product = props.state.data[category][preference];
        props.state.userData.product = product;
        props.actions.finalResult(name, people, preference, product.name);
    }

    return (
        <div>
            <button className='start-btn' onClick={() => preference("Nov_Fed")}>Nov_Fed</button>
            <button className='start-btn slow-btn' onClick={() => preference("Mar_Jun")}>Mar_Jun</button>
            <button className='start-btn slow-btn' onClick={() => preference("Jul_Oct")}>Jul_Oct</button>
        </div >
    )
}
