export interface ICounter {
    id: string;
    value: number;
}
export interface IAppState {
    counters: {
        [id: string]: ICounter
    };
}