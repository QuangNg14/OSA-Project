import React from 'react'

const Title = (props) => {
    const {name, name2} = props
    return(
        <div>
            <h1>
                Hello {name} and {name2}
                {/* Hello {props.name} and {props.name2} */}
            </h1>
        </div>
    )
}
export default Title;