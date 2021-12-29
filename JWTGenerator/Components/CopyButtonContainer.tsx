import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { ScopeSelectorComponent } from './ScopeSelectorComponent';


interface Props {
    CopyAuthObject : () => void
    CopyIdToken : () => void,
    CopyAccessToken : () => void
    CopyState : boolean,    
    toggleScopeSelector : (currentState : boolean) => void,
    showScopeSelector: boolean
    acquireCustomAccessToken : (scopeString : string | undefined) => Promise<void>,
    acquireTokenTokenInProgress : boolean
}


const btnGroupStyle = {
    top: "1rem",
    right: "1rem",
    zIndex: "10",
    display: "block",
    color: "#0d6efd",
    backgroundColor: "#fff",
};

const CopyButtonContainer = (props: Props) => {
    const copyAccessTokenOnClick = () =>{
        props.toggleScopeSelector(!props.showScopeSelector);
    }
    return (
        <>
        <div className="btn-group position-absolute" role="group" style={btnGroupStyle} aria-label="Basic outlined example">
                {props.CopyState ? 
                    <button type="button" disabled className="btn btn-outline-success"><FontAwesomeIcon className='text-success' icon={faCheck} /></button>
                : null}               
            
            <button type="button" className="btn btn-outline-primary" onClick={() => props.CopyAuthObject()}>Copy Auth Object</button>
            <button type="button" className="btn btn-outline-primary" onClick={() => props.CopyIdToken()}>Copy Id Token</button>
            <button type="button" className="btn btn-outline-primary" onClick={() => props.CopyAccessToken()}>Copy Access Token</button>
            <button type="button" className="btn btn-outline-primary" onClick={() => copyAccessTokenOnClick()}>Generate Access Token</button>
            
            <ScopeSelectorComponent showScopeSelector={props.showScopeSelector} 
            acquireCustomAccessToken={props.acquireCustomAccessToken}
            acquireTokenTokenInProgress={props.acquireTokenTokenInProgress}></ScopeSelectorComponent>
        </div>

        
        </>
    )
}

export default CopyButtonContainer
