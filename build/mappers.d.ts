import { SelectOption } from './types/common';
export type MapperFunction<T> = (collection: T[]) => SelectOption[];
export declare const mapper: <T>(functionMapper: string) => MapperFunction<T>;
//# sourceMappingURL=mappers.d.ts.map