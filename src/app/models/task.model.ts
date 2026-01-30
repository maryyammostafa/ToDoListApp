export type TaskModel = {
    id: string;
    userId: string;
} & TaskInfoModel;


export type TaskInfoModel = {
    title: string;
    summary: string;
    date: string;
};