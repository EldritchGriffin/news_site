import FullNavbar from './fullNavbar';
import { getAllFromCategory } from "../(handlers)/requestHandlers";

export default async function FullNavbarWrapper() {
    const politicaData = await getAllFromCategory("Política");
    const economiaData = await getAllFromCategory("Economía");
    const internacionalData = await getAllFromCategory("Internacional");
    const culturaYCienciaData = await getAllFromCategory("Cultura y Ciencia");
    const deportesData = await getAllFromCategory("Deportes");
    const entrevistasData = await getAllFromCategory("Entrevistas");
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