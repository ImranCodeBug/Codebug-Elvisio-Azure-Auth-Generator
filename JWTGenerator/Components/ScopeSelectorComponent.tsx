import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react'

interface Props {
    showScopeSelector: boolean
    acquireCustomAccessToken: (scopeString: string | undefined) => Promise<void>,
    acquireTokenTokenInProgress: boolean
}

export const ScopeSelectorComponent = (props: Props) => {
    const tokenString = React.useRef<HTMLInputElement>(null);

    const getIcon = () => {
        if (props.acquireTokenTokenInProgress) {
            return <FontAwesomeIcon className='text-secondary fa-spin' icon={faSpinner} />
        }
        else {
            return <FontAwesomeIcon className='text-secondary' icon={faSearch} />
        }
    }

    return (
        <div>
            {props.showScopeSelector ?
                <div className="input-group mt-2">
                    <input type="text" className="form-control" ref={tokenString} placeholder="Request Scopes (comma separated)" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => props.acquireCustomAccessToken(tokenString.current?.value)}>
                        {getIcon()}
                        &nbsp;
                        Acquire
                    </button>
                </div>
                : null}
        </div>
    )
}
