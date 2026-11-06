import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
    <section class="hero">
      <h1>Find Your New Best Friend</h1>
      <p>Every pet deserves a loving home. Meet our friends below!</p>
      <button class="button">Adopt Now</button>
    </section>

    <section class="pets">

      <h2>Meet Our Pets</h2>

      <div class="card-list">
        <div class="card">
          <div class="card-emoji">🐶</div>
          <h3>Buddy</h3>
          <p>A playful dog who loves running and belly rubs.</p>
          <button class="button">Adopt Buddy</button>
        </div>

        <div class="card">
          <div class="card-emoji">🐱</div>
          <h3>Luna</h3>
          <p>A calm cat who loves naps in the sun.</p>
          <button class="button">Adopt Luna</button>
        </div>

        <div class="card">
          <div class="card-emoji">🐰</div>
          <h3>Snowball</h3>
          <p>A fluffy bunny who loves carrots.</p>
          <button class="button">Adopt Snowball</button>
        </div>
      </div>
    </section>


    <Footer />
    </div>
  )
}

export default App;