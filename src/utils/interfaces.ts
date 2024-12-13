export type APIResponse = {
  id:          string;
  nombre:      string;
  descripcion: string;
  cantidad:    string ;
  cantidad_inventario:number;
  precio:      number;
  categoria:   Categoria;
  url_imagen:  string;
}

export enum Categoria {
  Bebidas = "bebidas",
  Carnes = "carnes",
  Frutas = "frutas",
  Lácteos = "lácteos",
  Otros = "otros",
  Pescado = "pescado",
  Verduras = "verduras",
}
