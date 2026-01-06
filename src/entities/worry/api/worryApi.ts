import type { Worry } from "../model/types";

export const fetchWorries = async (): Promise<Worry[]> => {
    return [{
        id: '1',
        content: '퇴근할 때 인사 더 크게 할걸 그랬낭',
        createdAt: '2025-01-06',
        isLocked: true
    }];
};