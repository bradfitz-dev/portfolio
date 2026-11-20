// asset imports
import { RiCloseLargeLine } from 'react-icons/ri';

// css imports
import '@/css/tools/popup.css'

function Popup({ id, children }) {
    return (
        <div className="pop" popover="auto" id={id}>
            <button type="button" popoverTarget={id} popoverTargetAction="hide" title="Close popup">
                <RiCloseLargeLine aria-hidden="true" />
            </button>
            <div>{children}</div>
        </div>
    )
}

export default Popup;