// @ts-ignore
// const { superFunction } = import('app2/superFunction');
// console.log(superFunction);

export class App {
  public message = 'Hello World!';

  // @ts-ignore
  m = import('app2/superFunction').then(m => m.superFunction());
  // @ts-ignore
  p = import('app2/hello');
}
