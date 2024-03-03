import Providerhead from "../../components/collection/Providerhead";
import Providerdescription from "../../components/collection/Providerdescription";
import Providerdata from "../../components/collection/Providerdata";

const Providerpage = () => {
  return (
    <main>
      <Providerhead onClick={undefined} />
      <Providerdescription />
      <Providerdata />
    </main>
  );
};

export default Providerpage;
