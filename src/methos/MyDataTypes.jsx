function MyDataTypes() {
    let IdNombre = 'Aaron';
    IdNombre = 20400706;
    //FIC: Constantes
    const Alias  = "Aaron";
    const Nombre  = "Alejandro";
    const Apellidos  = "Cabral Machuca"
    const NumControl = 20400706;
    const NumControl2 = 17400134;
    const FechaReg = new Date();
    //FIC: Variables
    let Experiencia = 2;
    let Activo = true;
    console.log("IdNombre:", IdNombre);
    console.log("IdNombre:", Alias);
    console.log("IdNombre:", Nombre);
    console.log("IdNombre:", Apellidos);
    console.log("IdNombre:", NumControl2);
    console.log("IdNombre:", FechaReg);
    console.log("IdNombre:", Experiencia);
    console.log("IdNombre:", Activo);
    //FIC: Arreglos
    let Pasatiempos = ['Música', 'Natación', 'dibujar', 'series y peliculas'];
    //FIC: Agregamos elementos al arreglo
    Pasatiempos.push('beisbol');
    Pasatiempos.push('futbol');
    Pasatiempos.push(20400706);
    Pasatiempos.push(true);
    console.log("Pasatiempos:", Pasatiempos);
    let Libros = [];
    Libros.push(12);
    Libros.push(true);
    Libros.push("La historia del loco");
    console.log("Libros:", Libros);
    return (
        <>
            <div>
                <h1>
                    Programa para conocer diferentes Tipos de de Datos
                </h1>
                <h2>
                      Alias: {Alias},    <br/>
                      Id:    {IdNombre}, <br/>
                      Nombre:{Nombre},  <br/>
                      Apellidos: {Apellidos}, <br/>
                      Num. Control: {NumControl}, <br/>
                      Num. Control 2: {NumControl2}, <br/>
                      Fecha de Registro:{FechaReg.toString()}, <br/>
                      Años de Experiencia: {Experiencia},<br/>
                      Estatus: {(Activo) ? 'Activo' : 'No Activo'}, <br/>
                      Pasatiempos: {Pasatiempos}, <br/>
                      Libros: {Libros[0]},   
                              {(Libros[1]) ? 'Activo' : 'No Activo'},
                              {Libros[2]}
                </h2>
            </div>
       
        </>
    );
};
export default MyDataTypes;
