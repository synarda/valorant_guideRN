import { Agent } from '../../agent_detail/domain/models/agent_model';
import { AppUrls } from '../../../config/urls';

type ApiResponse = {
    status: number;
    data: Agent;
};

export const fetchAgentById = async (agentId: string): Promise<Agent | null> => {
    try {
        const response = await fetch(`${AppUrls.valorantAgentDetailApi}${agentId}`);
        const json: ApiResponse = await response.json();
        if (json.status === 200) return json.data;
        return null;
    } catch {
        return null;
    }
};
