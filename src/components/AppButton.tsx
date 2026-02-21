import { Button, type ButtonProps } from '@mantine/core';

interface AppButtonProps extends ButtonProps {
  label: string;
  type?: 'button' | 'submit' | 'reset';
}

export function AppButton({ label, ...props }: AppButtonProps) {
  return <Button {...props}>{label}</Button>;
}
