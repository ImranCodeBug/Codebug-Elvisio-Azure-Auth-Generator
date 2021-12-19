export const ConstructMsalConfig = (clientId : string, tenantId : string) => {
    return  {
        auth: {
          clientId: clientId,
          authority: `https://login.microsoftonline.com/${tenantId}`, 
        },
        cache: {
          cacheLocation: "sessionStorage", // This configures where your cache will be stored
          storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
        }
      };
}

export const LogInRequest = {
    scopes : ["user.read"]
}