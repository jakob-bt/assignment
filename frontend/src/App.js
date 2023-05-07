import {Card, Button, Breadcrumb, BreadcrumbItem} from 'react-bootstrap'

function App() {

  return (
    <div>
      <Card style={{ display: 'inline-block', width: '60%' }}>

        <Card.Title>Test Test</Card.Title>
        <Card.Text>0 Tweets</Card.Text>

        <Card.Img src="https://picsum.photos/200/100"></Card.Img>
        <Card.Img style={{ position: 'relative', bottom: '6em', width: '25%', height: '10em' }} className="rounded-circle" src="https://picsum.photos/100/200"></Card.Img>
        <Card.Title style={{ position: 'relative', bottom: '4em', left: '3em' }} >Test Test</Card.Title>
        <Card.Text style={{ position: 'relative', bottom: '5em', left: '4em' }}>@test</Card.Text>

        <Button style={{ position: 'relative', bottom: '10em', left: '40em', width: '10%' }} >Follow</Button>

        <div className="d-flex justify-content-evenly" style={{ position: 'relative', bottom: '3em'}}>
        <Card.Text>Golf</Card.Text>
        <Card.Text>New Mexico</Card.Text>
        <Card.Text>example.com</Card.Text>
        <Card.Text>Joined May 2023</Card.Text>
        </div>
        
      </Card>

      <Card style={{ position: 'relative', bottom: '32em', display: 'inline-block', width: '40%' }} >
      <Card.Title>Trends for you</Card.Title>
      <Card.Text>#This</Card.Text>
      <Card.Text>#That</Card.Text>
      </Card>
      </div>
  );
}

export default App;