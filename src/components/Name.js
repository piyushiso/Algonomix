const Name = ({name, code}) => {

    return (
        <div id='name-component' className="name">
            <span className="title">{name}</span>
            <span className="subtitle">{code}</span>
        </div>
    )
}

export default Name