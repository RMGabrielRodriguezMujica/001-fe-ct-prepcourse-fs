var arbol = {
    altura: "50 cm",
    peso: "40 kg",
    fruto: true,
};

var persona = {
    nombre: "camilo",
    edad: 18,
    direccion: "jujuy",
    estudiantes: [
        {
            nombre: "fabrizio",
            carrea: "full stack Dev",
            profesion: "full stack Dev",
        },
        {
            nombre: "carlos",
            carrea: "full stack Dev",
            profesion: "full stack Dev",
        },
        {
            nombre: "juan",
            carrea: "full stack Dev",
            profesion: "full stack Dev",
        },
        {
            nombre: "angel",
            carrea: "full stack Dev",
            profesion: "full stack Dev",
        },
        {
            nombre: "nicolas",
            carrea: "full stack Dev",
            profesion: "full stack Dev",
        },
    ],
    mascota: {
        nombre: "Killu",
        edad: 3,
        raza: "sharpei",
    },
    edad2: 18,
    4: "key 4 de un objeto",
    url: "",
    saludar: function (idioma) {
        switch (idioma) {
            case "español":
                return "Hola";
            case "frances":
                return "Bonjour";
            default:
                return "Hi";
        }
    },
};

// console.log(persona.hasOwnProperty("nombre"));

// console.log(Object.keys(persona));

for (var clave in persona) {
    console.log(clave);

    console.log(persona[clave]);
}