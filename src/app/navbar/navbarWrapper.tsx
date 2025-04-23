import { getAllFromCategory } from "../(handlers)/requestHandlers";
import Navbar from './navbar';

export default async function NavbarWrapper() {
    const politicaData = await getAllFromCategory("Política");
    const economiaData = await getAllFromCategory("Economía");
    const internacionalData = await getAllFromCategory("Internacional");
    const culturaYCienciaData = await getAllFromCategory("Cultura y Ciencia");
    const deportesData = await getAllFromCategory("Deportes");
    const entrevistasData = await getAllFromCategory("Entrevistas");

          
    return (
        <Navbar
            politicaData={politicaData.data}
            economiaData={economiaData.data}
            internacionalData={internacionalData.data}
            culturaYCienciaData={culturaYCienciaData.data}
            deportesData={deportesData.data}
            entrevistasData={entrevistasData.data}
        />
    );
}