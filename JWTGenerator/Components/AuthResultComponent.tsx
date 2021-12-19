import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import CopyButtonContainer from './CopyButtonContainer';


interface Props {
    authResult: string,
    CopyAuthObject : () => void
    CopyIdToken : () => void,
    CopyAccessToken : () => void
    CopyState : boolean
}

const AuthResultComponent = (props: Props) => {
    return (
        <div className='row text-start'>
            <div className='col-12 position-relative'>
                <CopyButtonContainer CopyAuthObject={props.CopyAuthObject} 
                CopyIdToken={props.CopyIdToken} CopyAccessToken={props.CopyAccessToken}
                CopyState={props.CopyState}></CopyButtonContainer>
                <SyntaxHighlighter language="json" style={tomorrow} wrapLongLines wrapLines>
                    {props.authResult}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default AuthResultComponent
