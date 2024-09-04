Att börja använda sass

// initiera npm projekt
npm init -y

// installera sass per projekt
npm install sass --save-dev

// skapa .gitignore fil
// lägg till raden, 
node_modules

// lägg till
// i package.json
    "sass": "sass style.scss output.css"

// kör sass med,
npm run sass style.scss output.css
