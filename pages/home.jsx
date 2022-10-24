import Layout from "./layout";
import { About, Executor } from '../components/widgets/'

// noinspection JSUnusedGlobalSymbols
export default function Home(){
  return (
    <Layout heading={"Prabhat Sachdeva"}>
      <About />
      <Executor />
    </Layout >
  );
}


