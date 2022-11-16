export interface film {
  Title: string;
  ImgSrc: string;
  DirectorList: string[];
  ScriptWriterList: string[];
  ActorList: string[];
  TypeList: string[];
  Country: string[];
  Lang: string[];
  Date: string[];
  RunTime: string[];
  AnotherName: string[];
  DouBanRate: string;
  RatePeopleNum: string;
}

export type filmList = film[];
