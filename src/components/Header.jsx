import './Header.css';

export const Header = ({children, title}) => {

    console.warn(">>>>>>>>>>>> children:", children)
    return (
        <header className="header">
            <h1 className="title">{title}</h1>
            {"<<<<<<<<<<<<<<<<<<<<<<<<"}{children}
        </header>
    )
}

