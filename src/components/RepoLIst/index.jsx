import { useEffect, useState } from "react"

const ReposList = () => {
    const [repos, setRepos]  = useState([]);
    const urlGian = 'https://api.github.com/users/ogiansouza/repos';
    useEffect(() => {
        fetch(urlGian)
        .then(response => response.json())
        .then(responseJson =>{
            setRepos(responseJson)
        })
    })
    return(
        <>
            <ul>
                {repos.map(repositorio => (
                    <>
                        <li key={repositorio.id}>
                            <b>Name: </b> { repositorio.name } <br />
                            <b>Language: </b> {repositorio.language } <br/>
                            <a href={repositorio.html_url}>Visite no GitHub</a>
                        </li>
                        <hr />
                    </>
                ))}
            </ul>
        </>
    )
}

export default ReposList 