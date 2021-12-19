import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface Props {
    authResult : string
}

const textAreaStyle = {
    textAlign: "left"    
};

const AuthResultComponent = (props: Props) => {
    return (
        <div className='row text-start'>
                <div className='col-12'>
                    
                <SyntaxHighlighter language="json" style={tomorrow} wrapLongLines wrapLines>
                    {props.authResult}
                </SyntaxHighlighter>                    
                    
                </div>
            </div>
    )
}

export default AuthResultComponent
