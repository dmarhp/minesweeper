import { ChangelogItemType, Difficulty } from '../Enums';

export interface IGameSettings {
    width: number;
    height: number;
    mines: number;
    difficulty: Difficulty;
}

export interface ICell {
    x: number;
    y: number;
    isMine: boolean;
    neighbours: number;
}

export interface IGameDifficulty {
    title: string;
    settings: IGameSettings;
}

export interface IChangelogItem {
    date: string;
    items: {
        type: ChangelogItemType;
        description: string;
    }[];
}
