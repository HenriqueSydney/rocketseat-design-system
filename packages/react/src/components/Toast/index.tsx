import * as RadixToast  from "@radix-ui/react-toast";
import { ToastRoot, ToastTitle, ToastDescription, ToastClose } from "./styles";
import { X } from "phosphor-react";

export type ToastProps = {
    title?: string
    message: string
    duration?: number
    isOpen: boolean
    setIsOpen: () => void
}


export function Toast({ title, message, duration, isOpen, setIsOpen}: ToastProps){
    return (
        <RadixToast.Provider swipeDirection="right">
            <div style={{position: 'absolute', bottom: 10, right: 10}}>   
            <ToastRoot open={isOpen} onOpenChange={setIsOpen} duration={duration}>
                {title && <ToastTitle>{title}</ToastTitle>}
                <ToastDescription>
                   {message}
                </ToastDescription>
                <ToastClose asChild onClick={setIsOpen}>
					<X />
				</ToastClose>
			</ToastRoot>
			<RadixToast.Viewport/>       
            </div>   
        </RadixToast.Provider>
    )
}

Toast.displayName = 'Tooltip'