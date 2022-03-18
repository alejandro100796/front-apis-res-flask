//Apis
export const autenticator = "/oauth";
export const autenticatorCredetials = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  auth: {
    username: "web",
    password: "userWeb"
  }
};

export var headerToken = {
  //form: {
  grant_type: "password",
  username: "",
  password: ""
  //refresh_token: ''
  // }
};

export const EXTRA_SMALL_SCREEN = 1;
export const SMALL_SCREEN       = 2;
export const MEDIUM_SCREEN      = 3;
export const LARGE_SCREEN       = 4;
export const EXTRA_LARGE_SCREEN = 5;

/**Para el componente    clienteUnicoComponment  se indicara mediante estas constantes qué modulo estará ejecutando para la busqueda */
export const MODULE_ESTADO_DE_CUENTA = 1;
export const MODULE_GRUPOS_DE_CHOQUE = 2;


/**TOKEN STATUS */
export const TOKEN_STATUS ={
  APPROVED : "approved",
  EXPIRED  : "expired",
  REVOKED  : "revoked",
  REFRESH  : "refresh" 
}



