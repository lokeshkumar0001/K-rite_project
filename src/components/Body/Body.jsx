import Table from "./table/Table";
import Header from "./Header";
import Footer from "./Footer";
import Filtering from "./Filtering";

const Body = () => {
  return (
    <main className="border rounded-lg flex-1 flex flex-col ">
      {/* Body header */}
      <Header />

      {/* Filtering section */}
      <Filtering />

      {/* Table and bottom bar section */}
      <section className="relative flex flex-col justify-between flex-1 ">
        <Table />
        <Footer />
      </section>
    </main>
  );
};

export default Body;
