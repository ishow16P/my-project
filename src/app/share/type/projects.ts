export interface Projects {
  id?:number;
  pro_name?:string;
  start_date?:Date;
  end_date?:Date;
  submit_start?:Date;
  submit_end?:Date;
  score_start?:Date;
  score_end?:Date;
  status?:boolean;
  pro_type_id:number;
  rule_id?:number;
}

export interface requestUser{
  id?:number;
  name?:string;
  email?:string;
  statusRequest?:string;
}

export interface userInPro{
  pro_id?:number;
  pro_name?:number;
  pro_type?:string;
  start_date?:Date;
  status?:boolean;
}

export interface ProjectDetail{
  pro_name?:string;
  type_name?:string;
  start_date?:Date;
  end_date?:Date;
  rule_1?:string;
  rule_2?:string;
  rule_3?:string;
  rule_4?:string;
  rule_5?:string;
}
