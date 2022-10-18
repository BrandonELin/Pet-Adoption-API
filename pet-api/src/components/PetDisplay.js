// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function PetDisplay ({pet}) {
    //The component must return some JSX
    const loaded = () => {
        return (
            <div>
                <h1>{pet.Title}</h1>
                <h2>{pet.Genre}</h2>
                <img src={pet.Poster} alt={pet.Title} />
                <h2>{pet.Year}</h2>
            </div>
        )
    }

    const loading = () => {
        return <div>No data to display at the moment(</div>
    }

    return pet ? loaded() : loading()
}
  


  // We must export the component to use it in other files