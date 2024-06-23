# AI-Assisted Game Level Designer

![Demo GIF](/gifs/demo.gif)

This project is an AI-assisted game level designer that uses the MERN (MongoDB, Express.js, React, Node.js) stack along with AI capabilities to generate game levels based on user prompts. It offers integration with OpenAI's GPT-3 and local LLMs via LM Studio.

## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [AI Integration](#ai-integration)
- [Contributing](#contributing)
- [License](#license)

## Features

- AI-assisted level generation using OpenAI's GPT-3 or local LLMs
- Interactive UI for inputting level descriptions and visualizing generated levels
- Forest-themed design with animated components
- Responsive layout suitable for various screen sizes

![Home Page](/images/home.png)

## Technology Stack

- **Frontend**: React.js, Material-UI, Framer Motion
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI Integration**: OpenAI API, LM Studio

## Project Structure
```sh
ai-level-designer/
│
├── client/                 # Frontend React application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/                 # Backend Node.js/Express application
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── README.md
```
## Setup and Installation
1. Clone the repository:
```sh
git clone https://github.com/your-username/ai-level-designer.git
cd ai-level-designer
```
2. Set up the server:
```sh
cd server
npm install
```

3. Create a `.env` file in the server directory and add your MongoDB URI and OpenAI API key:
```sh
MONGO_URI=your_mongodb_uri
OPENAI_API_KEY=your_openai_api_key
```

4. Set up the client:
```sh
cd ../client
npm install
```

5. Start the server:
```sh
cd ../server
npm run dev
```

6. In a new terminal, start the client:
```sh
cd ../client
npm start
```

7. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Enter a description for your desired game level in the text field.
2. Select the AI model you want to use (OpenAI or Local LLM).
3. Click the "Generate Level" button.
4. View the generated level in the preview section.

![Level Preview](/images/level.png)

### AI Model Selection

You can choose between OpenAI's GPT-3 and a local LLM (via LM Studio) for level generation.

![AI Model Selection](/images/dropdownai.png)

## AI Integration

This project integrates two AI models for level generation:

1. **OpenAI's GPT-3**: Accessed via the OpenAI API, this model provides powerful natural language processing capabilities for interpreting user prompts and generating corresponding level layouts.

2. **Local LLM (LM Studio)**: This option allows for using a locally run language model, providing more control over the generation process and potentially faster response times.

The AI models interpret the user's text prompt and generate a 10x10 grid level layout using the following symbols:
- '#' for walls
- '.' for empty spaces
- 'S' for the start position
- 'E' for the end position
- 'T' for traps

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.