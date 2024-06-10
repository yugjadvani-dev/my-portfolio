/* The code is declaring a namespace `NodeJS` and within that namespace, it is declaring an interface
`ProcessEnv`. The `ProcessEnv` interface has a property `NEXT_PUBLIC_NAME` of type string. */
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_NAME: string;
  }
}
