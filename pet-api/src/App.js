import logo from './logo.svg';
import './App.css';

function App() {
  const apiKey = process.env.REACT_APP_API;

  let [pet, setPet] = useState(null);
  let [animal, setAnimals] = useState([]);

  let navigate = useNavigate();

  const getAnimals = async() => {

    try {
      const animalList = await fetch(`https://api.petfinder.com/v2/animals?status=adoptable`);
      const animals = await animalList.json();
      console.log(animals)
      setAnimals(animals)
    } catch (err) {
      console.log(err);
    }
  };

  //  async / await
  const getPet = async (petName) => {
    try {
      const response = await fetch(`https://api.petfinder.com/v2/animals/${petName}`);
      const data = await response.json();
      console.log(data);
      setPet(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
    </div>
  );
}

export default App;
