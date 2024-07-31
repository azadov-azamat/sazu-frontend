import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// import i18n from "i18next";
import {InitialStateProps} from "../../interface/redux/variable.interface";
import img1  from '../../assets/draft/partner1.png';
import img2  from '../../assets/draft/partner2.png';
import img3  from '../../assets/draft/partner3.png';
import img4  from '../../assets/draft/partner4.png';
import img5  from '../../assets/draft/partner5.png';
import img6  from '../../assets/draft/news1.png';
import img7  from '../../assets/draft/news2.png';
import img8  from '../../assets/draft/news3.png';
import elon  from '../../assets/draft/elon-musk.png';
import warren  from '../../assets/draft/warren-buffet.png';
import steve  from '../../assets/draft/steve-jobs.png';
import bill  from '../../assets/draft/bill-gates.png';
import sazu  from '../../assets/sazu/img.png';
import sBlogger  from '../../assets/sazu/blogger.png';
import sEvent  from '../../assets/sazu/event.png';
import sSmm  from '../../assets/sazu/smm.png';
import sTv  from '../../assets/sazu/tv.png';
import {http} from "../../config/api.ts";
import {toast} from "react-toastify";

export const getCarouselData = createAsyncThunk('variables/getCarouselData', async (_, {rejectWithValue}) => {
    try {
        const response = await http.get(`/carusel`)
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const getAboutData = createAsyncThunk('variables/getAboutData', async (_, {rejectWithValue}) => {
    try {
        const response = await http.get(`/about`)
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const getFooterData = createAsyncThunk('variables/getFooterData', async (_, {rejectWithValue}) => {
    try {
        const response = await http.get(`/footer`)
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const getNewsData = createAsyncThunk('variables/getNewsData', async (_, {rejectWithValue}) => {
    try {
        const response = await http.get(`/news`)
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const getPartnersData = createAsyncThunk('variables/getPartnersData', async (_, {rejectWithValue}) => {
    try {
        const response = await http.get(`/partners`)
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const getSazusData = createAsyncThunk('variables/getSazusData', async (_, {rejectWithValue}) => {
    try {
        const response = await http.get(`/sazus`)
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const getStaffsData = createAsyncThunk('variables/getStaffsData', async (_, {rejectWithValue}) => {
    try {
        const response = await http.get(`/staffs`)
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const createSubscribe = createAsyncThunk('variables/createSubscribe', async (data: {email: string}, {rejectWithValue}) => {
    try {
        const response = await http.post(`/subscribe`, data)
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

const initialState: InitialStateProps = {
    // lang: localStorage.getItem('i18nextLng') || 'ru',
    carousels: [],
    contacts: [
        {
            image: elon,
            name: 'Elon Musk',
            position: 'Programmist',
            description: 'Elon Musk is a programmer and entrepreneur known for founding SpaceX and co-founding Tesla.',
        },
        {
            image: warren,
            name: 'Warren Buffett',
            position: 'Menedjer',
            description: 'Warren Buffett is a manager and one of the most successful investors in the world.',
        },
        {
            image: bill,
            name: 'Bill Gates',
            position: 'Veb dizayner',
            description: 'Bill Gates is a web designer and co-founder of Microsoft, a leading software company.',
        },
        {
            image: steve,
            name: 'Steve Jobs',
            position: 'Injener',
            description: 'Steve Jobs was an engineer and visionary who co-founded Apple Inc.',
        }
    ],
    projects: [
        {
            id: 1,
          name: 'sazu',
          img: sazu
        },
        {
            id: 2,
          name: 'blogger',
          img: sBlogger
        },
        {
            id: 3,
          name: 'event',
          img: sEvent
        },
        {
            id: 4,
          name: 'smm',
          img: sSmm
        },
        {
            id: 5,
          name: 'tv',
          img: sTv
        },
    ],
    partners: [
        {
            img: img1,
            name: 'zortv'
        },
        {
            img: img2,
            name: 'zortv'
        },
        {
            img: img3,
            name: 'zortv'
        },
        {
            img: img4,
            name: 'zortv'
        },
        {
            img: img5,
            name: 'zortv'
        }
    ],
    news: [
        {
            id: 1,
            title: 'Компания Masterpack',
            desc: 'ведущий производитель в сфере качественной упаковки, обратилась в маркетинговую компанию Sazu',
            image: img6,
        },
        {
            id: 2,
            title: 'Компания Masterpack',
            desc: 'ведущий производитель в сфере качественной упаковки, обратилась в маркетинговую компанию Sazu',
            image: img7,
        },
        {
            id: 3,
            title: 'Компания Masterpack',
            desc: 'ведущий производитель в сфере качественной упаковки, обратилась в маркетинговую компанию Sazu',
            image:  img8,
        },
        {
            id: 4,
            title: 'Компания Masterpack',
            desc: 'ведущий производитель в сфере качественной упаковки, обратилась в маркетинговую компанию Sazu',
            image: img6,
        },
    ],
    loading: false,
    currentPage: 1,
    pageCount: 1,
    totalCount: 0,
    limit: 10
}

const reducers = {
    // setLang: (state: InitialStateProps, action: PayloadAction<number>) => {
    //     const langIndex = action.payload
    //     state.lang = Dictionary[langIndex]
    //     i18n.changeLanguage(Dictionary[langIndex])
    // },
    // logoutFunc: (state: InitialStateProps) => {
    //     state.userData = null
    //     localStorage.clear()
    // }
}

export const variableSlice = createSlice({
    name: 'variable',
    initialState,
    reducers,
    extraReducers: (builder) => {
        builder.addCase(getCarouselData.fulfilled, (state: InitialStateProps, action) => {
            console.log("get-carousel action.payload", action.payload)
            state.loading = false
        })
        builder.addCase(getCarouselData.pending, (state: InitialStateProps) => {
            state.loading = true
        })
        builder.addCase(getCarouselData.rejected, (state: InitialStateProps) => {
            state.loading = false
        })

        builder.addCase(getNewsData.fulfilled, (state: InitialStateProps, action) => {
            console.log("get-news action.payload", action.payload)
            state.loading = false
        })
        builder.addCase(getNewsData.pending, (state: InitialStateProps) => {
            state.loading = true
        })
        builder.addCase(getNewsData.rejected, (state: InitialStateProps) => {
            state.loading = false
        })

        builder.addCase(createSubscribe.fulfilled, (state: InitialStateProps, action) => {
            console.log("createSubscribe action.payload", action.payload)
            toast.success("Success");
            state.loading = false
        })
        builder.addCase(createSubscribe.pending, (state: InitialStateProps) => {
            state.loading = true
        })
        builder.addCase(createSubscribe.rejected, (state: InitialStateProps, action) => {
            console.log(action.payload)
            toast.error("Network error");
            state.loading = false
        })
    }
})

export const {
    // logoutFunc
} = variableSlice.actions;
export default variableSlice.reducer