function JsonInput({ value, onChange }) {
  return (
    <textarea
      className="form-control json-input"
      placeholder='{\n  "id": 10,\n  "title": "Build a JSON Generator",\n  "completed": false,\n  "priority": 3,\n  "createdAt": "2026-03-05"\n}'
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={12}
    />
  );
}

export default JsonInput;