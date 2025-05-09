function Book({book}) {
    return (
        <div className="item">
            <h3>Title :<span>{book.title}</span></h3>
            <p>author:<span>{book.author}</span></p>
            <p>id:<span>{book.id}</span></p>

        </div>
    )
}

export default Book