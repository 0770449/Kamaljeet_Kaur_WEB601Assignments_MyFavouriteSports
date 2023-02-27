export interface Content{
    id: number;
    title: string;
    description: string;
    creator: string;
    imgURL?: string;           //imgURL as an optional string
    type?: string;             //type as an optional string
    tags?: string[];           //tags as an optional array of strings 
}