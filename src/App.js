import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Information from "./components/organisms/Information";
import Shipping from "./components/organisms/Shipping";
import Footer from "./components/Footer";

function App() {
  const styles = {
    container: "flex flex-col md:flex-row-reverse",
    font: "text-base font-bold my-2",
    containerLeft: "px-16 py-10",
    containerRight: "px-16 py-10",
  };
  return (
    <div>
      <Header />

      <div className={styles.container}>
        {/* right side */}
        <div className={styles.containerRight}>
          <Card />
        </div>
        {/* left side */}
        <div className={styles.containerLeft}>
          {/*checkout */}
          <div>
            <h2 className={styles.font}>Contact information</h2>
            <Information />
          </div>
          <div>
            <h2 className={styles.font}>Shipping address</h2>
            <Shipping />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
