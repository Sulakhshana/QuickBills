import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import InvoiceForm from "./components/InvoiceForm";

const App = () => {
  return (
    <div className="App position-relative d-flex flex-column min-vh-100 justify-content-between align-items-center w-100">
      
      {/* Top-left logo */}
      <img 
        src="/logo.png" 
        alt="Logo" 
        style={{
          position: "fixed",
          top: "5px",
          left: "5px",
          width: "120px",   // Adjust size as needed
          height: "120px",
          objectFit: "contain",
          zIndex: 999
        }}
      />

      {/* Container shifted down so it doesn't clash with logo */}
      <Container className="mt-5 pt-5" style={{ marginTop: "200px" }}>
        <InvoiceForm />
      </Container>

      <footer className="text-center py-3 mt-5" style={{ fontSize: "16px", color: "#777" }}>
        QuickBills by Sulakhshana
      </footer>
    </div>
  );
};

export default App;
