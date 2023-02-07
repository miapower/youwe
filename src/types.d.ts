export interface KeyValuePair{
    [key: number]: string;
  }

export interface YouWeBox {
    key?: string;
    id?: number;
    header: string;
    body: string;
    color?: string;
  }

  export type RowProps = {
	showBoxes: any;
    handleAddBox?: any;
    handleDeleteBox?: any;
};

export type BoxProps = {
    id?: number;
	color?: string;
	headerText?: string;
	bodyContent?: string;
    handleAddBox?: any;
    handleDeleteBox?: any;
};