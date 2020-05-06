# Simple Express server for DoS attacks
Presentation published here [LINK]

## Reproduce Demo
1. Setup lab like found in presentation [link].
2. Clone this repo on web server/DoS victim machine.
    - `git clone https://github.com/Reed-Schimmel/eecs465presentation2.git`
    
3. Run commands in project directory run:
    - `npm i`
    - `openssl req -nodes -new -x509 -keyout server.key -out server.cert`
4. Run the server `npm start`.
