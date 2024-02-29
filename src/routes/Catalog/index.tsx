import './styles.css';
import Header from "../../components/Header";
import CarCardSection from '../../components/CarCardSection';
import CommentSection from '../../components/CommentSection';
import Footer from '../../components/Footer';


export default function Catalog(){

    return(
        <>
            <Header/>
            <main>
                <div>
                    <h2>Venha nos visitar</h2>
                </div>

                        <CarCardSection/>
                        <CarCardSection/>

                <section id='dsct-comment-section'>
                    <div >
                        <h2>O que estão dizendo</h2>
                    </div>

                        <CommentSection/>
                        <CommentSection/>
                        <CommentSection/>
                        <CommentSection/>
                        <CommentSection/>
                        <CommentSection/>
                </section>
                
            </main>

            <footer>
                    <Footer/>
            </footer>
        </>

    );
}
