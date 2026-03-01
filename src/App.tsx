import { DUMMY_DATA } from "./constants/accordionData";
import { Accordion } from "./components/AccordionComponent";

function App() {
  return (
    <main className="main-content" role="main">
      <section
        className="accordion-section"
        aria-labelledby="accordion-heading"
      >
        <h2 className="accordion-heading" id="accordion-heading">
          Accordion Section
        </h2>
        <Accordion data={DUMMY_DATA} />
      </section>
    </main>
  );
}

export default App;
