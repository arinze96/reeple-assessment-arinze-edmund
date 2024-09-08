import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { IUser } from "./interface";

export const useGetUserAsyncData = (FORTLINK_MOBILE_USER: string) => {
	return useQuery<IUser | null, Error>(FORTLINK_MOBILE_USER, async () => {
		const result: string | null = await AsyncStorage.getItem(FORTLINK_MOBILE_USER);

		return result ? JSON.parse(result) : undefined;
	});
};

export const useUpdateUserAsyncData = (FORTLINK_MOBILE_USER: string) => {
	const queryClient = useQueryClient();

	return useMutation(
		FORTLINK_MOBILE_USER,
		async (data: IUser | null) => {
			const result: string | null = await AsyncStorage.getItem(FORTLINK_MOBILE_USER);

			const currentData: IUser = result ? JSON.parse(result) : undefined;
			const user = currentData;

			await AsyncStorage.setItem(FORTLINK_MOBILE_USER, JSON.stringify(data));

			return user;
		},
		{
			onSuccess: () => queryClient.invalidateQueries(FORTLINK_MOBILE_USER),
		}
	);
};

