class Usuario {
   constructor(nombre, apellido, libros = [], mascotas = []){
      this.nombre = nombre
      this.apellido = apellido
      this.libros = libros
      this.mascotas = mascotas
   }

   getFullName(){
      return `${this.nombre} ${this.apellido}`
   }
   addMascota(mascota){
      this.mascotas.push(mascota)
   }
   countMascotas(){
      return this.mascotas.length
   }
   addBook(nombre, autor){
      this.libros.push({nombre, autor: autor});
   }
   getBookNames(){
       return this.libros.map((libro) => libro.nombre)
   }
}

const usuario1 = new Usuario(
   "Adan",
   "Contreras",
   [{nombre: "IT", autor: "Stephen King"}],
   ["perico", "gato", "perro"]
)

console.log(usuario1.getFullName());
console.log({cantidad: usuario1.countMascotas()});
usuario1.addMascota("hamster");
console.log({cantidad: usuario1.countMascotas()});
usuario1.addBook("Star Wars", "George Lucas");
const nombreLibro = usuario1.getBookNames();
console.log(nombreLibro);