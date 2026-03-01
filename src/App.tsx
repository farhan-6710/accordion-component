import { DUMMY_DATA } from "./constants/accordionData";
import { AccordionComponent } from "./components/AccordionComponent";

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
        <AccordionComponent data={DUMMY_DATA} multipleOpen={true} />
      </section>
    </main>
  );
}

export default App;
