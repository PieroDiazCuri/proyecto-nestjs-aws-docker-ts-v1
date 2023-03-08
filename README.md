Proyecto v 1.0.0

# Docker

### Descargar una imagen

docker pull mysql:

### Crear un contenedor

docker create --name mysql-server mysql:8

### Crear un volumen

docker volume create mysql-vol

### Crear un contenedor de forma más rapida, vincularlo a un volumen y a una imagen

docker run -d --name mysql-server -p 3340:3306 -e MYSQL_ROOT_PASSWORD=mysql -v mysql-vol:/var/lib/mysql mysql:8

### Iniciar un contenedor

docker start mysql-server

### Crear una imagen

docker build -t app-ddd

### listar todos los contenedores

docker ps -a

### listar todos los contenedores que estén ejecutandose

docker ps

### Filtrar la lista de Contendores

docker ps -a | grep mysql-server

### Eliminar un contenedor

docker rm -f mysql-server

### ver el log del contenedor

docker logs mysql-server

###

-e variable de entorno
-d ditach, evita que el contenedor se detenga así se cierre el terminal
-p puerto localhost que se conecta con el puerto de docker,mapeo de puertos
-f detiene el contenedor
volume crea una carpeta donde la data de mysql se guarda para que persista la información fuera de la red de docker
