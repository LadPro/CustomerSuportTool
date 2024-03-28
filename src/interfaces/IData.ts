export interface IUserTableItem {
  name: string;
  visible: boolean;
}

export interface IUserDataItem {
  nombre: string;
  numero: string;
  correo: string;
  motivo: string;
  estado: string;
  'fecha ultimo contacto': string;
  'historial de contacto': Record<string, string>;
  [key: string]: string | Record<string, string>;
}

export interface IUserData {
  user: IUserDataItem[];
}

export interface IUserStore {
  userTable: Record<string, IUserTableItem>;
  userData: IUserData;
}
