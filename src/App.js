import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Information from "./components/organisms/Information";
import Shipping from "./components/organisms/Shipping";
import Footer from "./components/Footer";

function App() {
  const styles = {
    font: "text-base font-bold my-2",
    containerLeft: "w-[60%] py-10 px-16",
    containerRight: "w-[40%] py-10 px-16",
  };
  return (
    <div className="">
      <Header />
      <div className="flex flex-grow ">
        {/* left side */}
        <div className={styles.containerLeft}>
          {/*checkout */}
          <div>
            <h2 className={styles.font}>Contact information</h2>
            <Information />
          </div>
          <div className="">
            <h2 className={styles.font}>Shipping address</h2>
            <Shipping />
          </div>
        </div>
        {/* right side */}
        <div className={styles.containerRight}>
          <Card />
        </div>
      </div>

      <Footer className="justify-center px-" />
    </div>
  );
}

export default App;
