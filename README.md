# CodeKaro – Seamless Coding Web Cloud IDE
`What CodeKaro is ? `

A web-based IDE designed to streamline the coding process, enhance productivity, and enable seamless collaboration.

`Problem it solve`

Developers often struggle with setting up and managing local development environments, dealing with compatibility issues, and collaborating efficiently. Traditional IDEs require installations, updates, and configurations, leading to lost time and reduced productivity.

`My Solution`

Cloud-web_ide - CodeKaro provides a zero-setup, web-based development environment accessible from any device. It eliminates configuration hassles, offering a smooth, efficient, and collaborative coding experience.


## Table of Contents
- [System Design](#architecture-design--codekaro-web-ide)
- [Engineering Problem](#engineering-problem)
- [Key Features](#key-features)
- [API's Design](#apis-design)
- [Tech Stack](#tech-stack)

## Architecture Design – CodeKaro Web-IDE
![CodeKaro](/images/2.png)

## Engineering Problem

**Problem: Isolated & Scalable Execution Environments**

`Problem: Shared Server Resources Cause Conflicts & Security Risks`

- If multiple users share the same execution environment, their processes can interfere, leading to resource contention and unpredictable behavior.
- A single misbehaving user can crash the entire system or access unauthorized data.
- Scaling becomes inefficient, as increasing user load can overwhelm shared resources.

`Solution: Spinning a New Docker Instance for Each User`

- Each user gets an isolated Docker container, ensuring independent execution without interference.

## Key Features
Instant Coding Environment – Start coding in seconds without installations.
- AI-Powered Assistance – Get smart code explanation and debugging with Gemini AI.
- Integrated Terminal – Execute commands and run scripts seamlessly.
- File Management System – Organize your projects with an intuitive UI.
- Collaboration Tools – Share your workspace and code in real time.

## API's Design

| **Endpoint**                      | **Description**                                      | **Events** (if applicable)        |
|------------------------------------|------------------------------------------------------|------------------------------------|
| `http://localhost:8000/`           | API to interact with the terminal                   | **Listen:** `terminal:data`  <br> **Emit:** `terminal:write` |
| `http://localhost:8000/files`      | Retrieve the file tree                              | N/A                                |
| `http://localhost:8000/files/content` | Fetch specific file content for debugging or AI-based explanation | N/A                                |


## Tech Stack  

| **Technology**  | **Description**  |
|----------------|------------------|
| **Node.js**    | JavaScript runtime for backend logic and API handling. |
| **Express.js** | Lightweight framework for building RESTful APIs. |
| **Socket.io**  | Enables real-time, bidirectional communication between client and server. |
| **node-pty**   | Provides a pseudo-terminal interface to run shell processes for each user. |
| **xTerm.js**   | A web-based terminal emulator for rendering and interacting with the terminal in the frontend. |
| **Gemini AI**  | AI-powered assistant for code explanation and debugging. |


## ⚠️ Known Issue After Deployment  

I'm encountered an issue after deploying the Cloud-IDE:  

- **Terminal UI Color Scheme Issue** – The character colors in the terminal are **not applied** as they were when running locally.  
- **Character Rendering Issue** – Commands execute properly, but each character appears on a **new line** instead of inline.  

**Current Status:** I'm actively investigating the root cause and exploring potential fixes. Any suggestions or contributions are welcome!  
