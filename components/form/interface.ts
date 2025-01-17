export interface FieldSchema {
  label: string;
  name: string;
  as: string;
  rules: string;
  [key: string]: any;
}

export interface SchemaForm {
  fields: FieldSchema[];
}
