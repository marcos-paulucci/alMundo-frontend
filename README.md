This project was bootstrapped with [Create React App]
(https://github.com/facebookincubator/create-react-app).
(https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

### `npm start`

Levanta la aplicacion en http://localhost:3000 

### `npm run build`

Hace el build de la aplicacion a la carpeta `build` , minifica y ofusca para maxima performance.

### Diseno de la solucion

la solucion utiliza react como base. Para el responsiveness y las vistas mobile se utilizaron los
componentes Flexview y MediaQuery. Preferi no utilizar un preprocesador (sass/less) ya que no fue 
necesario para esta solucion, ni tampoco es lo mas recomendado para trabajar con React.

### Aclaraciones

La aplicacion ira a buscar datos a la url especificada en el file config/apiProperties.js, por default
http://127.0.0.1:3100 , que es donde levanta el proyecto apiRest tambien por default.

