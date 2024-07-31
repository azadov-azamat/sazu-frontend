import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {InitialStateProps} from "../../interface/redux/variable.interface";

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
    footer: null,
    about: null,
    carousels: [],
    contacts: [],
    projects: [],
    partners: [],
    news: [],
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
            state.carousels = action.payload
            state.loading = false
        })
        builder.addCase(getCarouselData.pending, (state: InitialStateProps) => {
            state.loading = true
        })
        builder.addCase(getCarouselData.rejected, (state: InitialStateProps) => {
            state.loading = false
        })

        builder.addCase(getAboutData.fulfilled, (state: InitialStateProps, action) => {
            state.about = action.payload
            state.loading = false
        })
        builder.addCase(getAboutData.pending, (state: InitialStateProps) => {
            state.loading = true
        })
        builder.addCase(getAboutData.rejected, (state: InitialStateProps) => {
            state.loading = false
        })

        builder.addCase(getPartnersData.fulfilled, (state: InitialStateProps, action) => {
            state.partners = [...action.payload, ...action.payload, ...action.payload]
            state.loading = false
        })
        builder.addCase(getPartnersData.pending, (state: InitialStateProps) => {
            state.loading = true
        })
        builder.addCase(getPartnersData.rejected, (state: InitialStateProps) => {
            state.loading = false
        })

        builder.addCase(getSazusData.fulfilled, (state: InitialStateProps, action) => {
            state.projects = action.payload
            state.loading = false
        })
        builder.addCase(getSazusData.pending, (state: InitialStateProps) => {
            state.loading = true
        })
        builder.addCase(getSazusData.rejected, (state: InitialStateProps) => {
            state.loading = false
        })

        builder.addCase(getNewsData.fulfilled, (state: InitialStateProps, action) => {
            state.news = action.payload
            state.loading = false
        })
        builder.addCase(getNewsData.pending, (state: InitialStateProps) => {
            state.loading = true
        })
        builder.addCase(getNewsData.rejected, (state: InitialStateProps) => {
            state.loading = false
        })

        builder.addCase(getStaffsData.fulfilled, (state: InitialStateProps, action) => {
            state.contacts = action.payload;
            state.loading = false
        })
        builder.addCase(getStaffsData.pending, (state: InitialStateProps) => {
            state.loading = true
        })
        builder.addCase(getStaffsData.rejected, (state: InitialStateProps) => {
            state.loading = false
        })

        builder.addCase(getFooterData.fulfilled, (state: InitialStateProps, action) => {
            state.footer = action.payload;
            state.loading = false
        })
        builder.addCase(getFooterData.pending, (state: InitialStateProps) => {
            state.loading = true
        })
        builder.addCase(getFooterData.rejected, (state: InitialStateProps) => {
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