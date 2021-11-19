# Prueba Tecnica SICO Backend

## Documentacion Frontend

https://github.com/ilder948/sico-prueba-front/blob/main/README.md


<hr>
Backend desarrollado para la prueba tecnica

### Instalacion 

```bash
git clone https://github.com/ilder948/sico-prueba-back.git
cd sico-prueba-back
npm install

```


### Configurar variables de entorno 

En archivo .env previa instalacion de dotenv como dependencia de desarrollo `npm i dotenv -D`
```bash
PORT=
MSSQL_SERVER=
MSSQL_PORT=
MSSQL_USER=
MSSQL_PASS=
MSSQL_DATABASE=
```
En el archivo `src/config/index.js` remplazando los valores

```javascript
const config = {
    PORT: process.env.PORT,
    MSSQL_SERVER: process.env.MSSQL_SERVER,
    MSSQL_PORT: process.env.MSSQL_PORT,
    MSSQL_USER: process.env.MSSQL_USER,
    MSSQL_PASS: process.env.MSSQL_PASS,
    MSSQL_DATABASE: process.env.MSSQL_DATABASE
}
```

En este caso se utilizo una base de datos SQL Server 2016 en Azure 

**Credenciales se enviaran por correo**


