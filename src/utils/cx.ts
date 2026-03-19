export type ClassInput = string | false | null | undefined;

export function cx(...classes: ClassInput[]): string {
    return classes.filter(Boolean).join(' ');
}
