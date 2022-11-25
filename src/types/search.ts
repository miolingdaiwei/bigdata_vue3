export interface film {
  title: string;
  imgSrc: string;
  directorList: string[];
  scriptWriterList: string[];
  actorList: string[];
  typeList: string[];
  country: string[];
  lang: string[];
  date: string[];
  runTime: string[];
  anotherName: string[];
  douBanRate: string;
  ratePeopleNum: string;
  rowKey: string;
}

export type filmList = film[];
