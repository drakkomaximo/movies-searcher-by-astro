import { useState } from "react"

const Search = () => {
    const [text, setText] = useState('')

    const searchText = (e) => {
        setText(e.target.value)
    }

    const url = '/results/'
    return (
        <div>
            <center>
                <h1 className="mt-5">Search Movie</h1>
                <form action={`${url}${text}`} method="POST">
                    <input type="search" className="form-control p-3" value={text} onChange={searchText} placeholder="Search" />
                </form>
            </center>
        </div>
    )
}

export default Search
