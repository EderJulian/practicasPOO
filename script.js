class Persona {
    constructor(nombre, edad, genero) {
      this.nombre = nombre;
      this.edad = edad;
      this.genero = genero;
    }
  
    obtDetalles() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad: ${this.edad}`);
      console.log(`Género: ${this.genero}`);
    }
  }
  
  
  const persona1 = new Persona("Juan", 30, "Masculino");
  persona1.obtDetalles();

  
  class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
      super(nombre, edad, genero);
      this.curso = curso;
      this.grupo = grupo;
    }
  
    registrar() {
      console.log("Estudiante registrado con los siguientes detalles:");
      this.obtDetalles();  // Llamamos al método de la clase Persona para mostrar los detalles básicos
      console.log(`Curso: ${this.curso}`);
      console.log(`Grupo: ${this.grupo}`);
    }
  }
  
 
  const estudiante1 = new Estudiante("Juan", 20, "Masculino", "Matemáticas", "Grupo A");
  estudiante1.registrar();



  class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
      super(nombre, edad, genero);
      this.asignatura = asignatura;
      this.nivel = nivel;
    }
  
    asignar() {
      console.log("Profesor asignado con los siguientes detalles:");
      this.obtDetalles();  
      console.log(`Asignatura: ${this.asignatura}`);
      console.log(`Nivel: ${this.nivel}`);
    }
  }
  
 
  const profesor1 = new Profesor("Profesor Smith", 40, "Masculino", "Matemáticas", "Avanzado");
  profesor1.asignar();