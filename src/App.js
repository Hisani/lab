import logo from './sobowale-logo.PNG';
import grid from './grid-image.jpg';
import img1 from './jay.jpg'
import img2 from './west.jpg'
import img3 from './silo.jpg'
import './App.css';

function App() {

  const date = new Date()
  const hours = date.getHours()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <section>
        <div className='grid'>
          <div className='grid-text'>
            <h1>That Mini Photo Blog</h1>
            <p>A blog is a form of photo sharing and publishing in the format of a blog.</p>
          </div>
          <img src={grid} alt='grid' className='picgrid' />
        </div>
        <hr className='line'></hr>
        <div className='cards'>
          <div className='kard'>
            <img src={img1} alt='frame1' className='pic-frame' />
            <span>5.0 </span>
            <span>(0) </span>
            <span>NIG</span>
            <p>portrait sometimes can boost ones self estem depending on how the picture is being captured</p>
          </div>
           <div className='kard'>
            <img src={img2} alt='frame1' className='pic-frame' />
            <span>5.0 </span>
            <span>(0) </span>
            <span>BnW</span>
            <p>portrait sometimes can boost ones self estem depending on how the picture is being captured</p>
          </div>
           <div className='kard'>
            <img src={img3} alt='frame1' className='pic-frame' />
            <span>5.0 </span>
            <span>(0) </span>
            <span>NIG</span>
            <p>portrait sometimes can boost ones self estem depending on how the picture is being captured</p>
          </div>

          

        </div>
        <h1> It's currently {hours}am today </h1>
      </section>
    </div>


  );

}

export default App;
