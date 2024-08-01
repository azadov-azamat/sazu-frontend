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
        const response = await http.post(`/subscribe/`, data)
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

const initialState: InitialStateProps = {
    footer: null,
    about: null,
    carousels: [],
    contacts: [],
    projects: [],
    partners: [],
    news: [],
    subscribeLoading: false,
    loading: false,
    currentPage: 1,
    pageCount: 1,
    totalCount: 0,
    limit: 10
}

const reducers = {}

export const variableSlice = createSlice({
    name: 'variable',
    initialState,
    reducers: reducers,
    extraReducers: (builder) => {
        builder.addCase(getCarouselData.fulfilled, (state: InitialStateProps, action) => {
            state.carousels = action.payload
        })

        builder.addCase(getAboutData.fulfilled, (state: InitialStateProps, action) => {
            state.about = action.payload
        })

        builder.addCase(getPartnersData.fulfilled, (state: InitialStateProps, action) => {
            state.partners = [...action.payload, ...action.payload, ...action.payload]
        })

        builder.addCase(getSazusData.fulfilled, (state: InitialStateProps, action) => {
            state.projects = action.payload
        })

        builder.addCase(getNewsData.fulfilled, (state: InitialStateProps, action) => {
            state.news = action.payload
        })

        builder.addCase(getStaffsData.fulfilled, (state: InitialStateProps, action) => {
            state.contacts = action.payload;
        })

        builder.addCase(getFooterData.fulfilled, (state: InitialStateProps, action) => {
            state.footer = action.payload;
        })

        builder.addCase(createSubscribe.fulfilled, (state: InitialStateProps, action) => {
            console.log("createSubscribe action.payload", action.payload)
            toast.success("Success");
            state.subscribeLoading = false
        })
        builder.addCase(createSubscribe.pending, (state: InitialStateProps) => {
            state.subscribeLoading = true
        })
        builder.addCase(createSubscribe.rejected, (state: InitialStateProps, action) => {
            console.log(action.payload)
            toast.error("Network error");
            state.subscribeLoading = false
        })
    }
})

export const {

} = variableSlice.actions;
export default variableSlice.reducer