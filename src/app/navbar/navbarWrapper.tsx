import { getLatestPostsFromCategory } from '../(handlers)/requestHandlers';
import Navbar from './navbar';

export default async function NavbarWrapper() {
    const politicaData = await getLatestPostsFromCategory("Política",10);
    const economiaData = await getLatestPostsFromCategory("Economía",10);
    const internacionalData = await getLatestPostsFromCategory("Internacional",10);
    const culturaYCienciaData = await getLatestPostsFromCategory("Cultura y Ciencia",10);
    const deportesData = await getLatestPostsFromCategory("Deportes",10);
    const entrevistasData = await getLatestPostsFromCategory("Entrevistas",10);
    return ( 
        <Navbar
            politicaData={politicaData}
            economiaData={economiaData}
            internacionalData={internacionalData}
            culturaYCienciaData={culturaYCienciaData}
            deportesData={deportesData}
            entrevistasData={entrevistasData}
        />
    );
}