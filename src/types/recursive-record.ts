export type RecursiveRecord<T extends string = string> = {
    [k in T]: T | RecursiveRecord
}
