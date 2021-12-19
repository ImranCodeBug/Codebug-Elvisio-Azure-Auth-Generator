import { AuthenticationResult, PublicClientApplication } from '@azure/msal-browser';
import * as React from 'react';
import { LogInRequest } from '../Services/AuthBuilderService';
import AuthResultComponent from './AuthResultComponent';

interface Props {
    instance : PublicClientApplication
}

export const MainContainer = (props: Props) => {
    const [authResultText, setAuthResultText] = React.useState<string | "">("");    
    const [authResult, setAuthResult] = React.useState<AuthenticationResult | null>(null);
    const [copyState, setCopyState] = React.useState<boolean>(false);

    React.useEffect(() => {
        const login = async () => {
            const loginRequest = LogInRequest;
            const response = await props.instance.loginPopup(loginRequest);
            setAuthResult(response);
        }
        login();        
    }, [])
    
    React.useEffect(() => {
        if(authResult){
            const responseStringyfy = JSON.stringify(authResult, null, '\t');
            setAuthResultText(responseStringyfy);
        }
    }, [authResult])

    
const copyIntoClipboard = (textToBeCopied : string) => {
    
    navigator.clipboard.writeText(textToBeCopied);
    setCopyState(!copyState);
    console.log("copied")
}

    const copyAuthObject = () => {    
        setCopyState(!copyState);    
        copyIntoClipboard(authResultText);        
    }

    const copyIdToken = () => {        
        setCopyState(!copyState);
        copyIntoClipboard(authResult?.idToken!);        
    }


    const copyAccessToken = () => {
        setCopyState(!copyState);
        copyIntoClipboard(authResult?.accessToken!);
    }

    
    
    return (
        <div className="container-fluid ">
            <AuthResultComponent authResult={authResultText} 
            CopyAuthObject={copyAuthObject}
            CopyAccessToken={copyAccessToken}
            CopyIdToken={copyIdToken}
            CopyState={copyState}></AuthResultComponent>
            
        </div>
    )
}
