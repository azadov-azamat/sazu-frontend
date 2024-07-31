export interface InitialStateProps {
    // lang: string;
    loading: boolean;
    about: aboutDataKey | null;
    footer: footerDataKeys;
    carousels: carouselDataKey[] | [];
    projects: projectsDataKey[] | [];
    contacts: contactCardDataProps[] | [];
    partners: partnersDataKeys[] | [];
    news: newsDataKeys[] | []
    currentPage: number;
    pageCount: number;
    limit: number;
    totalCount: number;
}

export interface carouselDataKey {
    image: string;
}

export interface aboutDataKey extends carouselDataKey{
    text: string;
}

export interface contactCardDataProps {
    image: string;
    name: string;
    profession: string;
    text: string;
}

export interface partnersDataKeys {
    icon: string;
}

export interface footerDataKeys {
    video: string;
}

export interface projectsDataKey extends defaultKeys {
    icon: string;
    link: string;
}

export interface newsDataKeys extends defaultKeys {
    image: string;
    title: string;
    description: string;
}

export interface defaultKeys {
    id: number;
    // created_at: string; // Assuming the timestamp is stored in ISO format
    // updated_at: string; // Assuming the timestamp is stored in ISO format
}