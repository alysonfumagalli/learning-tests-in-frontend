import { TextInput, type TextInputProps } from '@mantine/core';

interface AppTextInputProps extends TextInputProps {
  value: string;
}

export function AppTextInput({ value, ...props }: AppTextInputProps) {
  return <TextInput type="text" value={value} {...props} />;
}
