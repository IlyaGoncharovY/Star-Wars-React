import * as React from 'react';
import {ReactNode} from 'react';
import {Button, Modal} from "react-bootstrap";

type BasicModalType = {
    children: ReactNode
    open: boolean
    closeHandler: () => void
}

export const BasicModal = (props: BasicModalType) => {

    return (
        <Modal show={props.open} onHide={props.closeHandler}>
            {props.children}
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeHandler}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}