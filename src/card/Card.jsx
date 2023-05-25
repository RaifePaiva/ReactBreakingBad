
import './Card.css'
import photo from '../assets/logo.png'

function Card ({quote, author}){
    return (
        <>
            <div className='card shadow p-3 mb-5 bg-white rounded card-container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={photo} className="img-fluid card-img-left" width={150} height={200}/>
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body d-flex align-items-center'>
                            <blockquote>
                            <p>&quot;{quote}&quot;</p>
                            <footer>- {author}</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card