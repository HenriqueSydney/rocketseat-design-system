import { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@henrique-ui/react'

export default {
    title: 'Data display/Toast',
    component: Toast,
    args: {
        title: 'Agendamento Realizado',
        message: 'Quarta-feira, 23 de Outubro às 16h',
        isOpen: true,
    },   
    argTypes: {
        title: {
            control: {
                type: 'text'
            }
        },
        message: {
            control: {
                type: 'text'
            }
        },
        isOpen: {
            control: {
                type: 'boolean'
            }
        },
    }
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
    args: {
        isOpen: true
    }
}

