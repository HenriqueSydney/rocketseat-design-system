import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@henrique-ui/react'

export default {
    title: 'Data display/Avatar',
    component: Avatar,
    args: {
        src: 'https://github.com/HenriqueSydney.png',
        alt: 'Henrique Lima'
    },
    argTypes: {
        src: {
            control: {
                type: 'text'
            }
        }
    }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined
    }
}

