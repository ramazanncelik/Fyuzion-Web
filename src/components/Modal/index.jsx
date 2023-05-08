"use client"
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import modals from '@/utils/modals'
import store from "@/store";
import { closeModal } from '@/store/modal'

function Modal({ name, data }) {

    const currentModal = modals.find(m => m.name === name)

    const [isOpen, setIsOpen] = useState(true)

    const modalClose = () => {
        setIsOpen(false)
        setTimeout(() => {
            store.dispatch(closeModal());
        }, 200)
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={modalClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="w-screen h-screen fixed inset-0 overflow-hidden">
                    <div className="w-screen flex h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            {name === "usage-agreement-modal" &&
                                <Dialog.Panel className="w-full md:w-[50%] h-full transform overflow-hidden rounded-xl text-left align-middle shadow-xl transition-all z-40 relative">
                                    <currentModal.element close={modalClose} />
                                </Dialog.Panel>}
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Modal