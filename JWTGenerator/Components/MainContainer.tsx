import { PublicClientApplication } from '@azure/msal-browser';
import * as React from 'react';
import { LogInRequest } from '../Services/AuthBuilderService';
import AuthResultComponent from './AuthResultComponent';

interface Props {
    instance : PublicClientApplication
}

export const MainContainer = (props: Props) => {

    const [authResult, setAuthResult] = React.useState<string | "">("");
    
    React.useEffect(() => {
        const login = async () => {
            const loginRequest = LogInRequest;
            const response = await props.instance.loginPopup(loginRequest);
            const responseStringyfy = JSON.stringify(response, null, '\t');
            setAuthResult(responseStringyfy);
            
        }
        login();        
    }, [])    
    console.log(authResult)
    return (
        <div className="container-fluid ">
            <AuthResultComponent authResult={authResult}></AuthResultComponent>
            
        </div>
    )
}
