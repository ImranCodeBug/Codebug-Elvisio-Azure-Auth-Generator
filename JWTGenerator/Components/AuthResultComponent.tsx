import * as React from 'react';
import { Button } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'


interface Props {
    authResult : string
}

const textAreaStyle = {    
    top: "1rem",
    right: "1rem",
    zIndex: "10",
    display: "block",
    padding: ".25rem .5rem",    
    color: "#0d6efd",
    backgroundColor: "#fff",
    border: "1px solid",
    borderRadius: ".25rem"
};

const t = () => {
    navigator.clipboard.writeText('this is for copy')
}

const AuthResultComponent = (props: Props) => {
    return (
        <div className='row text-start'>
                <div className='col-12 position-relative'>                    
                    <Button className="position-absolute" style={textAreaStyle}>hi</Button>
                    
                <SyntaxHighlighter language="json" style={tomorrow} wrapLongLines wrapLines>
                    {props.authResult}
                </SyntaxHighlighter>                    
                    
                </div>
            </div>
    )
}

export default AuthResultComponent
