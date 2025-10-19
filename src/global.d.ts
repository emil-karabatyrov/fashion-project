declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.scss" {
  const content: { [key: string]: string };
  export default content;
}

declare module "*.css" {
  const content: { [key: string]: string };
  export default content;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.gif" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "*.webp" {
  const value: string;
  export default value;
}

// Для алиасов (если используете @/assets/)
// declare module '@/assets/*' {
//     const value: string;
//     export default value;
// }
