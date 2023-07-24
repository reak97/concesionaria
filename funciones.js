const autos = require("./etapa1");
const autosImportados = require("./etapa1");
let concesionaria = {
   autos: autosImportados,
 
   buscarAuto: function(patente){
      return this.autos.find(auto=>auto.patente === patente) ?? null;
   },

   venderAuto: function (patente){
        const auto = this.buscarAuto(patente);
        if (auto){
           return auto.vendido = true;
      }
         
   },
    autosParaLaVenta: function(){
    return this.autos.filter(function (auto){
       return !auto.vendido
    })
    },
    autosNuevos: function(){
        return this.autosParaLaVenta(function(auto){
          return this.autos.filter (function(auto){
            return auto.km < 100;
          })
          })
        
        }
    }    

console.log(concesionaria.autosNuevos());
//console.log(concesionaria.autosParaLaVenta());
 //console.log(concesionaria.venderAuto("APL123"))
 //console.log(concesionaria.autos)
 //console.log(concesionaria.buscarAuto("JJK116"));
