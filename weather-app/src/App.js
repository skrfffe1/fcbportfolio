import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Card, Container} from 'semantic-ui-react'
import WeatherWidget from './components/WeatherWidget';

export default function App() {

  return (
    <div className="App">
        <div>
          <Container fluid>        
              <Card>
                <h2>Weather App</h2>
                <WeatherWidget />
              </Card>       
          </Container>        
        </div>
    </div>
  );
}

