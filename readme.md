/*Códigos de instalación para TypeScript y ejecución del programa*/

//Instalación de TypeScript
npm i -D typescript @types/express @types/node

//Configuración de TypeScripts (JSON)
npx tsc --init

//Cambios automáticos en la ejecución del servidor
npm install -D concurrently nodemon

//Cambiar configuración del los Scripts del archivo "package.json"
"build": "npx tsc",
"start": "node dist/index.js",
"dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""

//Instalar Express
npm i express

//Instalación del JWT para verificación de usuarios
npm i @types/jsonwebtoken --save-dev

//Instalación de Cors
npm i --save-dev @types/cors