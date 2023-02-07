export interface KeyValuePair{
    [key: number]: string;
  }

export interface YouWeBox {
    key?: string;
    header: string;
    body: string;
    color?: string;
  }

  export type RowProps = {
	showBoxes: any;
};

export type BoxProps = {
	color?: string;
	headerText?: string;
	bodyContent?: string;
};