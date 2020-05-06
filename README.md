# Simple Express server for DoS attacks
Presentation published [here](https://docs.google.com/document/d/1DUTimmV9sLUamPmjBBfn78Z0ED7K_DPfhSDHGwpEmyo/edit?usp=sharing)

## Reproduce Demo
1. Setup lab like found in [this presentation](https://docs.google.com/document/d/1DUTimmV9sLUamPmjBBfn78Z0ED7K_DPfhSDHGwpEmyo/edit?usp=sharing).
2. Clone this repo on web server/DoS victim machine.
    - `git clone https://github.com/Reed-Schimmel/eecs465presentation2.git`
    
3. Run commands in project directory run:
    - `npm i`
    - `openssl req -nodes -new -x509 -keyout server.key -out server.cert`
4. Run the server `npm start`.
