import { useQuery } from '@apollo/react-hooks';
import { FETCH_COUNTER } from './query';

export const useFetchCounter = () => {
    return useQuery(FETCH_COUNTER);
}