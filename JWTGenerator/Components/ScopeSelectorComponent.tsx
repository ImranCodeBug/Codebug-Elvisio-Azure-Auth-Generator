import * as React from 'react'

interface Props {
    showScopeSelector: boolean

}

export const ScopeSelectorComponent = (props: Props) => {

    return (
        <div>
 
            {props.showScopeSelector ?
                <div className="input-group mt-2">
                    <input type="text" className="form-control" placeholder="Request Scopes (comma separated)" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Acquire</button>
                </div>
                : null}
        </div>
    )
}
