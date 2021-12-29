import { AuthenticationResult, PublicClientApplication } from '@azure/msal-browser';
import * as React from 'react';
import { LogInRequest } from '../Services/AuthBuilderService';
import AuthResultComponent from './AuthResultComponent';

// showScopeSelector: boolean
//     acquireCustomAccessToken : (scopeString : string | undefined) => Promise<void>,
//     acquireTokenTokenInProgress : boolean

interface Props {
    instance: PublicClientApplication
}

export const MainContainer = (props: Props) => {
    const [authResultText, setAuthResultText] = React.useState<string | "">("");
    const [authResult, setAuthResult] = React.useState<AuthenticationResult | null>(null);
    const [copyState, setCopyState] = React.useState<boolean>(false);
    const [showScopeSelector, setShowScopeSelector] = React.useState<boolean>(false);
    const [acquireTokenTokenInProgress, setAcquireTokenTokenInProgress] = React.useState<boolean>(false);

    React.useEffect(() => {
        const login = async () => {
            const loginRequest = LogInRequest;
            const response = await props.instance.loginPopup(loginRequest);
            setAuthResult(response);
        }
        login();
    }, [])

    React.useEffect(() => {
        if (authResult) {
            const responseStringyfy = JSON.stringify(authResult, null, '\t');
            setAuthResultText(responseStringyfy);
        }
    }, [authResult])

    const acquireScopedToken = async (scopeString: string | undefined) => {
        console.warn(scopeString);
        if (scopeString) {
            setAcquireTokenTokenInProgress(true);
            const requestedScopes = scopeString.split(',');
            const response = await props.instance.acquireTokenPopup({
                scopes: requestedScopes,
                account: authResult?.account!
            });

            setAuthResult(response);
            setAcquireTokenTokenInProgress(false);
        }

    }

    const copyIntoClipboard = (textToBeCopied: string) => {

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
                CopyState={copyState}
                showScopeSelector={showScopeSelector}
                toggleScopeSelector={setShowScopeSelector}
                acquireAccessTokenInProgress={acquireTokenTokenInProgress}
                acquireCustomAccessToken={acquireScopedToken}
            ></AuthResultComponent>

        </div>
    )
}
