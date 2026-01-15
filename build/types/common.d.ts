export type Banner = {
    label: string;
    to?: string;
};
export type CalendarEvent = {
    id: string;
    bgcolor: string;
    date: string;
    details: [];
    icon: string;
    title: string;
    time: string;
};
export type Crumb = {
    label: string;
    name?: string | null;
};
export type EmptyMessage = {
    message: string;
    caption: string;
    route_name: string;
    button_text: string;
};
export type FormInput = string | number | FileList | null | undefined;
export type Metadata = {
    current_page: number;
    from: number;
    last_page: number;
    links: PaginationLink[];
    path: string;
    per_page: number;
    to: number;
    total: number;
};
export type NavLink = {
    label: string;
    icon: string;
    name: string;
    action?: () => {};
    params?: Record<string, string>;
};
export type PageError = {
    message: string;
    caption?: string;
    button_text?: string;
    route_name?: string;
};
export type Paginated<T> = {
    data: Array<T>;
    links: PaginationLink[];
    meta: Metadata;
};
export type PaginationLink = {
    url: string | null;
    label: string;
    active: boolean;
};
export type Portal = 'admin' | 'lecturer' | 'student';
export type SelectOption = {
    label: string;
    caption?: string;
    avatar?: string;
    value: string | number;
};
export type Status = {
    icon: string;
    color: string;
};
export type Workload = {
    maximum_normal_load: number;
    accepted_normal_load: number;
    remaining_normal_load: number;
    maximum_part_time_load: number;
    accepted_part_time_load: number;
    remaining_part_time_load: number;
};
//# sourceMappingURL=common.d.ts.map