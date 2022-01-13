// ENTRADAS
const NOMBRE_CLIENTE="Valentina Atehortua "
let direccionCliente="Calle 44 # 89-69 "
let telefonoCliente="6012909000 "
let metodoPagoCliente="efectivo "
const descuento=10000


const NOMBRE_REPARTIDOR=" Adrian soto "
const IDENTIFICACION_REPARTIDOR="1152716184 "
let ubicacionRepartidor=" calle 86 # 56-78 "
 
const NOMBRE_TIENDA="Las delicias de Arturo "
let nombreProducto=" Postre de Café "
let precioUnitarioProducto= 5000
let cantidadProducto= 10

const IVA=0.19

const tieneDescuento=true

// PROCESO PARA CALCULAR  EL COSTO TOTAL DEL ENVIO

let valorNeto= precioUnitarioProducto * cantidadProducto
let valorIVA= valorNeto*IVA
let valorImpuesto= valorNeto + valorIVA
let ValorTotal= valorImpuesto - descuento

// para no utilizar tantas variables
let ValorTotal= (precioUnitarioProducto * cantidadProducto * IVA - descuento)

// SALIDA

console.log(" ............................................................................")
console.log("................................... RAPPI ...................................")
console.log(" ____________________________________________________________________________")
console.log(` Nombre de producto: ${nombreProducto}`)
console.log(` Precio unitario: ${precioUnitarioProducto}`)
console.log(` Cantidad Producto: ${cantidadProducto}`)
console.log(` Valor Neto: ${valorNeto}`)
console.log(` Valor del Iva: ${valorIVA}`)
console.log(` Valor del impuesto: ${valorImpuesto}`)
console.log(` Valor de descuento: ${descuento}`)
console.log(" ____________________________________________________________________________")
console.log(`El total a pagar es: ${ValorTotal} `)


