// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function PetDisplay ({pet}) {
    //The component must return some JSX
    const loaded = () => {
        return (
            <div>
                <img src={pet.photos.small} alt={pet.name} />
                <h1>{pet.name}</h1>
                <h2>{pet.type}</h2>
                <h2>{pet.description}</h2>
            </div>
        )
    }

    const loading = () => {
        return <div>No data to display at the moment(</div>
    }

    return pet ? loaded() : loading()
}
  


  // We must export the component to use it in other files