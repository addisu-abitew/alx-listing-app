// Interfaces for common components

export interface CardProps {
    title: string;
    image?: string;
    description?: string;
}

export interface ButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
}
