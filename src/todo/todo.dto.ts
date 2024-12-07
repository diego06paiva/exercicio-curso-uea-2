export interface CreateTodo{
    title: string;
    isCompleted: boolean;
    isDelete?: boolean;
}

export interface UpdateTodo {
    title?: string;
    isCompleted?: boolean;
    isDelete?: boolean;
}