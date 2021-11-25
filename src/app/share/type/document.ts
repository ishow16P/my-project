export interface Member{
  membername?: string;
}

export interface Document{
  id?:number;
  name?:string
  address?:string;
  date?:string;
  member: Member[];

}

