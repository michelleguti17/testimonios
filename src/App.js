
import './App.css';
/*Con exportaciones por default exportamos solo uno de ese archivo*/
import Testimonio from './componentes/Testimonio';
/*  Exportaciones nombradas para tener varios elementos exportadas  se utiliza  las {} para llamar a solo uno
import {Testimonio} from './componentes/Testimonio';
 */

/*Esta funcionalidad renderiza el componente Testimonio y esto crea la estructura de la App*/
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>This is What Our Customers Say About Our Clothing Store:</h1>
      <Testimonio
        nombre="Sophie Evans"
        pais="London"
        img="Dress"
        cargo="Professional Stylist"
        testimonio="As a stylist, discovering the perfect summer dress is like finding a hidden gem, and I'm thrilled to share my recent find. This summer dress from a boutique label blends sophistication with the essence of summer. The lightweight fabric and floral patterns create a whimsical yet elegant look. It's my go-to recommendation for anyone wanting to embrace the season with style. Trust me, this dress will make you feel like you're walking on sunshine wherever you go"
        alt= "Sophie"
       />
      <Testimonio
        nombre="Emily Turner"
        pais="USA"
        img="Jeans"
        cargo="Fashion Blogger "
        testimonio="Finding the perfect pair of jeans can be a struggle, but I stumbled upon a brand that exceeded all my expectations. The fit is like a dream, and the quality is unmatched. These jeans have become a staple in my wardrobe, giving me both comfort and style. My followers often ask about them, and I can't recommend them enough for that effortlessly chic look!" 
        alt= "Emily"
        />
     
     <Testimonio
        nombre="Alex Thompson"
        pais="France"
        img="ActiveWear"
        cargo="Fitness Enthusiast"
        testimonio="When it comes to activewear, I've tried my fair share of brands, but one stands out for its performance and style. This athletic apparel not only keeps me comfortable during workouts but also looks amazing. The breathable fabric and trendy designs make hitting the gym a fashion-forward experience. Trust me, you'll feel unstoppable in this gear!"
        alt= "Alex"
        />
      
      
      
     
      
      </div>
    </div>
  );
}

export default App;
