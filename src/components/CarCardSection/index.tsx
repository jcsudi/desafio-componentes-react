import carImg from '../../assets/car.png';
import './styles.css';

export default function CarCardSection(){

    return(
        <section id='dsct-visit-section'>
            <div className="dsct-car-card-container">
                <div className='dsct-car-card-content'>
                    <img src={carImg} alt="Carro" />
                    <p>Lorem ipsum dolor</p>
                </div>
            </div>
        </section>
    );

    
}