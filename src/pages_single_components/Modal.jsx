import { createPortal } from "react-dom";

export default function Modal({ title, content, show, onClose, onConfirm, confirmText = "Confirm" }) {

    // RENDER
    if (!show) return null;

    // RENDER
    return createPortal(
        <div>
            <h2>{title}</h2>
            {content}
            <div>
                <button onClick={onClose}>
                    Cancel
                </button>
                <button onClick={onConfirm}>
                    {confirmText}
                </button>
            </div>
        </div>,
        document.body
    )
}