export default function groupNamesSorter<T>(getName?: (val: T) => string): (a: any, b: any) => 1 | 0 | -1;
