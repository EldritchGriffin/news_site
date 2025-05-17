import { getLatestPostsFromCategory } from '../(handlers)/requestHandlers';
import FullNavbar from './fullNavbar';

export default async function FullNavbarWrapper() {
    const politicaData = await getLatestPostsFromCategory("Política",10);
    const economiaData = await getLatestPostsFromCategory("Economía",10);
    const internacionalData = await getLatestPostsFromCategory("Internacional",10);
    const culturaYCienciaData = await getLatestPostsFromCategory("Cultura y Ciencia",10);
    const deportesData = await getLatestPostsFromCategory("Deportes",10);
    const entrevistasData = await getLatestPostsFromCategory("Entrevistas",10);
    return (
        <FullNavbar
            politicaData={politicaData}
            economiaData={economiaData}
            internacionalData={internacionalData}
            culturaYCienciaData={culturaYCienciaData}
            deportesData={deportesData}
            entrevistasData={entrevistasData}
        />
    );
}