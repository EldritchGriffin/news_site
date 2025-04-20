import { getAllFromCategory } from "../(handlers)/requestHandlers";
import Navbar from './navbar';

export default async function NavbarWrapper() {
    const politicaData = await getAllFromCategory("Politica");
    const economiaData = await getAllFromCategory("Economia");
    const internacionalData = await getAllFromCategory("Internacional");
    const culturaYCienciaData = await getAllFromCategory("Cultura y Ciencia");
    const deportesData = await getAllFromCategory("Deportes");
    const entrevistasData = await getAllFromCategory("Entrevistas");

    console.log(politicaData);
    console.log(economiaData);
    console.log(internacionalData);
    console.log(culturaYCienciaData);
    console.log(deportesData);
    console.log(entrevistasData);
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