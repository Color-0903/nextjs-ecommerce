import { authUserApi } from "@/apis";
import { QUERY_KEY } from "@/utils/constant";
import { useQuery } from "@tanstack/react-query";

export const useQueryMeApi = () => {
    const results = useQuery({
        queryKey: [QUERY_KEY.QUERY_ME],
        queryFn: () => authUserApi.authUserControllerMe(),
        enabled: true,
    });

    return results?.data?.data;
};
