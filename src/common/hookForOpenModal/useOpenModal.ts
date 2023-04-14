import {useState} from "react";

export const useOpenModal = () => {

    let [openModal, setOpenModal] = useState<boolean>(false)

    const openModalHandler = () => setOpenModal(true)
    const closeModalHandler = () => setOpenModal(false)

    return (
        {openModal, openModalHandler, closeModalHandler}
    )
}