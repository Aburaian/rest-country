import './App.css';
import Countries from './Compoents/Countries/Countries';
import Header from './Compoents/Header/Header';



function App() {
  return (
    <div className="App">
    <Header></Header>
    <Countries></Countries>
    
      
    </div>
  );
}

/* function RestCountries() {
  const [countries, setcountries] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(json => setcountries(json))
  },[])
  return (
    <div>
    {
      countries.map(country => <Country name={country.name.common} area={country.area}></Country>)

    }
    </div>
  )
}

function Country({name, area}) {
  
  return (
    <div>
      <h3>{name}</h3>
      <p>{area}</p>
      
    </div>
  )
}
 */



export default App;
