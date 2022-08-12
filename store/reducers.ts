import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

//Reducers
import ColorsReducer from '../theme/colors.reducer'
import { AddNewItemsReducer } from '../components'
import { ItemsListReducer, ItemScreenReducer, LoginScreenReducer, ModalReducer, PrivacyPolicyReducer } from '../store'

// Persist configs
const darkModePersistConfig = {
  key: 'darkMode',
  storage: AsyncStorage
}

const itemsListPersistConfig = {
  key: 'itemsList',
  storage: AsyncStorage
}

const userIdPersistConfig = {
  key: 'userId',
  storage: AsyncStorage
}

const duesPersistConfig = {
  key: 'dues',
  storage: AsyncStorage
}

const PrivacyPolicyConfig = {
  key: 'ppModal',
  storage: AsyncStorage
}

// Reducers
const reducers = combineReducers({
    newName: AddNewItemsReducer,
    newDescription: AddNewItemsReducer,
    newBudget: AddNewItemsReducer,
    newDeadline: AddNewItemsReducer,
    newCurrency: AddNewItemsReducer,
    newImage: AddNewItemsReducer,
    imageSearchQuery: AddNewItemsReducer,
    imageId: AddNewItemsReducer,
    item: ItemScreenReducer,
    dues: persistReducer(duesPersistConfig, ItemScreenReducer),
    //dues: ItemScreenReducer, // Persist it!
    itemsList: persistReducer(itemsListPersistConfig, ItemsListReducer),
    //itemsList: ItemsListReducer, // Persist it!
    darkMode: persistReducer(darkModePersistConfig, ColorsReducer),
    userId: persistReducer(userIdPersistConfig, LoginScreenReducer),
    modalIndex: ModalReducer,
    //ppModal: PrivacyPolicyReducer, // Persist it when ready to deploy!
    ppModal: persistReducer(PrivacyPolicyConfig, PrivacyPolicyReducer)
});

export default reducers
