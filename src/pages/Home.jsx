import Hero from "../components/Hero";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Inicio | Folch & Mora Abogados</title>
        <meta name="google-site-verification" content="ow3ZnspbBx68zelQLpsenjxPuutbDAvWee6iOVZ_A0g"/>
        <meta name="description" content="Defendemos tus derechos con excelencia. Estudio Jurídico Folch & Mora, especialistas en derecho de familia, laboral y penal en la region de Valparaiso" />
      </Helmet>
      <Hero />
    </div>
  );
}

export default Home;
<meta name="google-site-verification" content="ow3ZnspbBx68zelQLpsenjxPuutbDAvWee6iOVZ_A0g" />