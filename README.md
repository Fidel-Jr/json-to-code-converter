# JSON → Code Model Generator

A simple web tool that converts **JSON objects into code models** for multiple programming languages.

Paste a JSON object, choose a target language, and instantly generate a corresponding model class or interface.

This project demonstrates a lightweight **developer utility tool** built with React.

---

## 🚀 Features

- Paste JSON input
- Generate models for:
  - C#
  - TypeScript
  - Python
- Copy generated code to clipboard
- Download generated code as files (`.cs`, `.ts`, `.py`)
- Simple and clean UI

---

## 🌐 Live Demo

The project is deployed on **Vercel**.

👉 [https://json-to-code-converter.vercel.app/](https://json-to-code-converter.vercel.app/)

---

## 🧠 Example

### JSON Input

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "isActive": true
}
```

### Generated C# Model
```C#
public class RootObject
{
  public int Id { get; set; }
  public string Name { get; set; }
  public string Email { get; set; }
  public bool IsActive { get; set; }
}
```

### Generated TypeScript Interface
```TypeScript
interface RootObject {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
```

### Generated Python Dataclass
```Python
from dataclasses import dataclass

@dataclass
class RootObject:
    id: int
    name: str
    email: str
    isActive: bool
```

---

## 🛠️ Tech Stack

Frontend

- React

- JavaScript

- Bootstrap

Deployment

- Vercel

All code generation logic runs entirely in the browser (no backend required).

---

## ⚙️ Installation
Clone the repository
```
git clone https://github.com/Fidel-Jr/json-to-code-converter.git
```
Navigate into the project folder
```
cd json-to-code-converter
```
Install dependencies
```
npm install
```
Start the development server
```
npm start
```

---

## 📁 Project Structure
```
src
 ├── components
 │    ├── JsonInput.jsx
 │    ├── LanguageSelector.jsx
 │    ├── CodeOutput.jsx
 │
 ├── utils
 │    └── codeGenerators.js
 │
 ├── App.jsx
 └── main.jsx
```

---

## 🔮 Future Improvements
This project can be extended further by adding:

- Support for more programming languages (Java, Go, Kotlin, etc.)

- Nested object support

- Array type detection

- Syntax highlighting

- Additional model customization

---

## 📚 Article
I also wrote a Medium article explaining the project and its development process.
[Read here](https://your-project-name.vercel.app)
