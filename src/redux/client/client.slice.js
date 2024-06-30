import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clientInitialState } from "./client.initialState";

import * as ClientService from "../../service/ClientService";
import { isEmpty } from "../../common/utils/utill";

const clientSlice = createSlice({
  name: "clients",
  initialState: clientInitialState,
  reducers: {
    setClients: (state, action) => {
      state.clients = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setActiveClient: (state, action) => {
      state.activeClient = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchClients.pending, (state, action) => {});
    builder.addCase(fetchClients.rejected, (state, action) => {});
    builder.addCase(fetchClients.fulfilled, (state, action) => {
      state.clients = action.payload.data;
    });

    builder.addCase(searchClients.pending, (state, action) => {});
    builder.addCase(searchClients.rejected, (state, action) => {});
    builder.addCase(searchClients.fulfilled, (state, action) => {
      state.searchResults = action.payload.data;
    });

    builder.addCase(fetchClientsById.rejected, (state, action) => {});
    builder.addCase(fetchClientsById.fulfilled, (state, action) => {
      state.activeClient = action.payload.data;
    });

    builder.addCase(saveClient.rejected, (state, action) => {});
    builder.addCase(saveClient.fulfilled, (state, action) => {
      state.activeClient = action.payload.data;
    });

    builder.addCase(updateClientsById.rejected, (state, action) => {});
    builder.addCase(updateClientsById.fulfilled, (state, action) => {
      state.activeClient = action.payload.data;
    });

    builder.addCase(deleteClientsById.rejected, (state, action) => {});
    builder.addCase(deleteClientsById.fulfilled, (state, action) => {
      if (isEmpty(action.payload)) {
        state.activeClient = {};
      }
    });
  },
});

export const fetchClients = createAsyncThunk("fetchClients", (query) =>
  ClientService.fetchClientsWithQueryAPI(query)
);

export const searchClients = createAsyncThunk("searchClients", (query) =>
  ClientService.fetchClientsWithQueryAPI(query)
);

export const fetchClientsById = createAsyncThunk("fetchClientsById", (id) =>
  ClientService.fetchClientsByIdAPI(id)
);

export const saveClient = createAsyncThunk("saveClient", (client) =>
  ClientService.saveClientAPI(client)
);

export const updateClientsById = createAsyncThunk(
  "updateClientsById",
  (id, client) => ClientService.updateClientsByIdAPI(id, client)
);

export const deleteClientsById = createAsyncThunk("deleteClientsById", (id) =>
  ClientService.deleteClientsByIdAPI(id)
);

export const { setActiveClient, setClients, setSearchResults } =
  clientSlice.actions;
export default clientSlice.reducer;
