export function generateCode(obj, language) {
  switch (language) {
    case "csharp":
      return generateCSharp(obj);

    case "typescript":
      return generateTypeScript(obj);

    case "python":
      return generatePython(obj);

    default:
      return "";
  }
}

function generateCSharp(obj) {
  let code = "public class RootObject {\n";

  for (let key in obj) {
    const type = getType(obj[key]);
    code += `  public ${type.csharp} ${capitalize(key)} { get; set; }\n`;
  }

  code += "}";
  return code;
}

function generateTypeScript(obj) {
  let code = "interface RootObject {\n";

  for (let key in obj) {
    const type = getType(obj[key]);
    code += `  ${key}: ${type.ts};\n`;
  }

  code += "}";
  return code;
}

function generatePython(obj) {
  let code = "from dataclasses import dataclass\n\n";
  code += "@dataclass\nclass RootObject:\n";

  for (let key in obj) {
    const type = getType(obj[key]);
    code += `  ${key}: ${type.py}\n`;
  }

  return code;
}

function getType(value) {
  if (typeof value === "number")
    return { csharp: "int", ts: "number", py: "int" };

  if (typeof value === "string")
    return { csharp: "string", ts: "string", py: "str" };

  if (typeof value === "boolean")
    return { csharp: "bool", ts: "boolean", py: "bool" };

  return { csharp: "object", ts: "any", py: "Any" };
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}