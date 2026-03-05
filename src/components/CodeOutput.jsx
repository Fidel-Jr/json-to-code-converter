function CodeOutput({ code, language }) {
  const copyCode = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      alert("Code copied to clipboard!");
    }
  };

  const downloadCode = () => {
    if (code) {
      const extensions = {
        csharp: 'cs',
        typescript: 'ts',
        python: 'py'
      };
      const extension = extensions[language] || 'txt';
      const blob = new Blob([code], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `model.${extension}`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="code-output-wrapper">
      <pre className="code-output">
        <code>{code || "// Generated code will appear here..."}</code>
      </pre>

      <div className="d-flex gap-3 mt-3">
        <button 
          className="btn btn-primary flex-grow-1"
          onClick={copyCode}
          disabled={!code}
        >
          <span className="me-2">📋</span>
          Copy Code
        </button>
        <button 
          className="btn btn-outline-secondary flex-grow-1"
          onClick={downloadCode}
          disabled={!code}
        >
          <span className="me-2">⬇</span>
          Download .{language === 'csharp' ? 'cs' : language === 'typescript' ? 'ts' : 'py'} File
        </button>
      </div>
    </div>
  );
}

export default CodeOutput;