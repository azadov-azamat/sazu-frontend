export interface InitialStateProps {
    // lang: string;
    loading: boolean;

    currentPage: number;
    pageCount: number;
    limit: number;
    totalCount: number;
}

export interface defaultKeys {
    id: number;
    created_at: string; // Assuming the timestamp is stored in ISO format
    updated_at: string; // Assuming the timestamp is stored in ISO format
}