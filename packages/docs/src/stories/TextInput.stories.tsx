import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@henrique-ui/react'

export default {
    title: 'Form/Text Input',
    component: TextInput,
    args: {},
    decorators: [
        (story) => {
            return (
                <Box as="laber" css={{ display: 'flex', flexDirection: 'column', gap: 2}}>
                    <Text size="sm">Email address</Text>
                    {story()}
                </Box>
            )
        }
    ]
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'Type your name'
    }
}

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true
    }
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: 'cal.com/',
        placeholder: 'your-username'
    }
}


