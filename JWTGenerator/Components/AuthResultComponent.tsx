import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import CopyButtonContainer from './CopyButtonContainer';


interface Props {
    authResult: string,
    CopyAuthObject: () => void
    CopyIdToken: () => void,
    CopyAccessToken: () => void
    CopyState: boolean,
    showScopeSelector: boolean,
    toggleScopeSelector : (newValue : boolean) => void,
    acquireCustomAccessToken : (scopeString : string | undefined) => Promise<void>,
    acquireAccessTokenInProgress : boolean
}

const AuthResultComponent = (props: Props) => {
    return (
        <>
            <div className='row text-start'>
                <div className='col-12 position-relative'>
                    <CopyButtonContainer CopyAuthObject={props.CopyAuthObject}
                        CopyIdToken={props.CopyIdToken} CopyAccessToken={props.CopyAccessToken}
                        CopyState={props.CopyState} showScopeSelector={props.showScopeSelector}
                        toggleScopeSelector={props.toggleScopeSelector}
                        acquireTokenTokenInProgress={props.acquireAccessTokenInProgress}
                        acquireCustomAccessToken={props.acquireCustomAccessToken}></CopyButtonContainer>
                    <SyntaxHighlighter language="json" style={tomorrow} wrapLongLines wrapLines>
                        {props.authResult}
                    </SyntaxHighlighter>
                </div>
            </div>
        </>
    )
}

export default AuthResultComponent
