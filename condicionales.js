// IF -- TERNARIO -- SWITCH CASE

// vendedor --> tiene acceso a casi todo
// comprador --> tiene muy poco acceso
// admin --> tiene acceso a absolutamente todo

const verificarPermisos = (rol) => {
  if (rol == "vendedor") {
    return "tiene acceso a casi todo";
  } else if (rol == "admin") {
    return "tiene acceso a absolutamente todo";
  } else {
    return "tiene muy poco acceso";
  }
};

let tienePermiso = verificarPermisos("vendedor");
console.log(tienePermiso);

// clima es lluvioso --> sí, llévalo
// clima no es lluvioso --> no, no hace falta

const salgoConParaguas = (clima) => {
  if (clima == "luvioso") {
    return "sí, llévalo";
  } else {
    return "no, no hace falta";
  }
};

// CONDICIONES TERNARIAS --> condición ? cuando se cumpla : cuando no se cumpla

const salirParaguas = (clima) =>
  clima == "lluvioso" ? "sí, llévalo" : "no, no hace falta";

let res = salirParaguas("lluvioso");
console.log(res);

// SWITCH CASE

// impuesto --> 200
// audi 10
// vw 20
// bmw 30
// fiat 40

const calcularImpuesto = (marca) => {
  let impuesto = 200;

  switch (marca) {
    case "audi":
      impuesto = impuesto + 10;
      break;
    case "vw":
      impuesto = impuesto + 20;
      break;
    case "bmw":
      impuesto = impuesto + 30;
      break;
    case "fiat":
      impuesto = impuesto + 40;
      break;
    default:
      impuesto = "Tu auto está excento";
  }

  return impuesto;
};

let impuesto = calcularImpuesto("fiat");
console.log(impuesto);
