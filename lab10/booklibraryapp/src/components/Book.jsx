function Book({title,author, id}) {
    return (
        <div>
            <h3>Title :<span>{title}</span></h3>
            <p>author:<span>{author}</span></p>
            <p>id:<span>{id}</span></p>

        </div>
    )
}

export default Book