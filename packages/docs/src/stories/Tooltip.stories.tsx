import { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@henrique-ui/react'

export default {
    title: 'Data display/Tooltip',
    component: Tooltip,
    args: {
        content: '21 de Outubro',
        children: <Button>Passe o mouse</Button>
    },
    argTypes: {
        content: {
            control: {
                type: 'text'
            }
        },
        children: {
           control: {
            disable: true
           }
        }
    }
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

