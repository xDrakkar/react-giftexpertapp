import React  from 'react'   
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem'
// import getGifs from '../helpers/getGifs'

const GifGrid = ({category}) => {

    
    const {data:images, loading} = useFetchGifs(category)
   
// Sin hooks
    // const [images, setImages] = useState([])

    // console.log(data);
   

    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages)
    // }, [category])
    
    return (
        <>
            <h3> {category} </h3>

            {loading && <p className='animate__animated animate__bounceOut'>Loading...</p>}

            <div className='card-grid'>
                
                {
                    images.map(img => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
                
            </div>
        </>
      );
}
 
export default GifGrid;