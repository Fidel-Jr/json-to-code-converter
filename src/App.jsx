import { useState } from "react";
import JsonInput from "./components/JsonInput";
import LanguageSelector from "./components/LanguageSelector";
import CodeOutput from "./components/CodeOutput";
import { generateCode } from "./utils/codeGenerators";
import "./App.css";

function App() {
  const [jsonInput, setJsonInput] = useState("");
  const [language, setLanguage] = useState("csharp");
  const [generatedCode, setGeneratedCode] = useState("");
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleGenerate = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      const code = generateCode(parsed, language);
      setGeneratedCode(code);
    } catch (err) {
      alert("Invalid JSON");
    }
  };

  const loadExample = () => {
    const exampleJson = {
      "id": 10,
      "title": "Build a JSON Generator",
      "completed": false,
      "priority": 3,
      "createdAt": "2026-03-05"
    };
    setJsonInput(JSON.stringify(exampleJson, null, 2));
  };

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" onClick={closeNavbar}>
            <div className="brand-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </a>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={toggleNavbar}
            aria-controls="navbarNav" 
            aria-expanded={navbarOpen} 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#home" onClick={closeNavbar}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={closeNavbar}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#github" onClick={closeNavbar}>
                  GitHub
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <h1 className="hero-title">JSON to Code Model Generator</h1>
          <p className="hero-subtitle">
            Convert JSON into C#, TypeScript, or Python models instantly.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container main-content">
        <div className="row g-4">
          {/* Left Panel - JSON Input */}
          <div className="col-lg-6">
            <div className="card panel-card">
              <div className="card-body">
                <h5 className="panel-title">Paste JSON Data</h5>
                
                <JsonInput value={jsonInput} onChange={setJsonInput} />
                
                <div className="bottom-controls">
                  <button 
                    className="btn btn-outline-primary load-example-btn"
                    onClick={loadExample}
                  >
                    Load Example
                  </button>
                  
                  <LanguageSelector value={language} onChange={setLanguage} />
                </div>

                <button 
                  className="btn btn-primary btn-generate mt-3 w-100"
                  onClick={handleGenerate}
                >
                  Generate Code
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel - Code Output */}
          <div className="col-lg-6">
            <div className="card panel-card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="panel-title mb-0">
                    Generated {language === 'csharp' ? 'C#' : language === 'typescript' ? 'TypeScript' : 'Python'} Model
                  </h5>
                  <button className="btn btn-link text-muted p-0">⋯</button>
                </div>
                
                <CodeOutput code={generatedCode} language={language} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;