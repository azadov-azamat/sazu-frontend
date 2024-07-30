export interface InitialStateProps {
    // lang: string;
    loading: boolean;
    projects: projectsDataKey[] | [];
    contacts: contactCardDataProps[] | [];
    partners: partnersDataKeys[] | [];
    news: newsDataKeys[] | []
    currentPage: number;
    pageCount: number;
    limit: number;
    totalCount: number;
}

export interface contactCardDataProps {
    image: string;
    name: string;
    position: string;
    description: string;
}

export interface partnersDataKeys {
    img: string;
    name: string;
}

export interface projectsDataKey extends defaultKeys{
    img: string;
    name: string;
}

export interface newsDataKeys extends defaultKeys{
    image: string;
    title: string;
    desc: string;
}

export interface defaultKeys {
    id: number;
    // created_at: string; // Assuming the timestamp is stored in ISO format
    // updated_at: string; // Assuming the timestamp is stored in ISO format
}