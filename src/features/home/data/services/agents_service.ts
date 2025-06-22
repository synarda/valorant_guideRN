import { Agent } from '../../domain/models/agent_model';
import { AppUrls } from '../../../../config/urls';

export async function fetchAgents(): Promise<Agent[]> {
    try {
        const response = await fetch(AppUrls.valorantAgentsApi);
        const json = await response.json();
        return json.data as Agent[];
    } catch (error) {
        console.error('AgentService error:', error);
        return [];
    }
}
