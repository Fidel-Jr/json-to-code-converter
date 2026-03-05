function LanguageSelector({ value, onChange }) {
  return (
    <div className="language-selector-wrapper">
      <label className="language-label">Target Language</label>
      <select 
        className="form-select language-select" 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="csharp">C#</option>
        <option value="typescript">TypeScript</option>
        <option value="python">Python</option>
      </select>
    </div>
  );
}

export default LanguageSelector;