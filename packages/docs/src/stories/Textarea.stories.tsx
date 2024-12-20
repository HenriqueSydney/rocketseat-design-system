import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Textarea, TextareaProps } from '@henrique-ui/react'

export default {
    title: 'Form/Textarea',
    component: Textarea,
    args: {},
    decorators: [
        (story) => {
            return (
                <Box as="laber" css={{ display: 'flex', flexDirection: 'column', gap: 2}}>
                    <Text size="sm">Observations</Text>
                    {story()}
                </Box>
            )
        }
    ]
} as Meta<TextareaProps>

export const Primary: StoryObj<TextareaProps> = {
    args: {
        placeholder: 'Add any observations'
    }
}

export const Disabled: StoryObj<TextareaProps> = {
    args: {
        disabled: true
    }
}



