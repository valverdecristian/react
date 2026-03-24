interface CustomHeaderProps {
    title: string;
    description: string;
}

export const CustomHeader = ({ title, description }: CustomHeaderProps) => {
    return (
        <header className="content-center">
            <h1>{title}</h1>
            <p>{description}</p>
        </header>
    )
}