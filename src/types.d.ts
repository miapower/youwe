export interface KeyValuePair{
    [key: number]: string;
  }

export interface YouWeBox {
    key?: string;
    id?: number;
    header: string;
    body: string;
    img?: string;
    extra?:string;
    color?: string;
  }

  export type RowProps = {
	showBoxes: any;
    handleAddBox?: any;
    handleDeleteBox?: any;
};

export type BoxProps = {
    key?: string | number;
    id?: number;
	color?: string;
	headerText?: string;
	bodyContent?: string;
    bodyExtra?: string;
    imgUrl?: string;
    handleAddBox?: any;
    handleDeleteBox?: any;
};