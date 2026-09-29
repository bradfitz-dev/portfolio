// css imports
import '@/css/tools/popup.css'

function Popup({ id, children }) {
    return (
        <div className="pop" popover="auto" id={id}>
            <button type="button" popoverTarget={id} popoverTargetAction="hide">X</button>
            <div>{children}</div>
        </div>
    )
}

export default Popup;