import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { addToMain, removeMain, addToSuccess, removeSuccess, addToError, removeError } from '../store/stacks/slice';

export const useStackActions = () => {
    const dispatch = useDispatch<AppDispatch>();

    const addItemToMain = (item:string) => {
        dispatch(addToMain(item));
    }

    const removeItemFromMain = () => {
        dispatch(removeMain());
    }

    const addItemToSuccess = (item:string) => {
        dispatch(addToSuccess(item));
    }

    const removeItemFromSuccess = () => {
        dispatch(removeSuccess());
    }

    const addItemToErrors = (item:string) => {
        dispatch(addToError(item));
    }

    const removeItemFromErrors = () => {
        dispatch(removeError());
    }

    return { addItemToMain, removeItemFromMain, addItemToSuccess, removeItemFromSuccess, addItemToErrors, removeItemFromErrors };
}