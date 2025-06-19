import { Agent } from '../../domain/models/agent_model';

export async function fetchAgents(): Promise<Agent[]> {
    try {
        const response = await fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true');
        const json = await response.json();
        return json.data as Agent[];
    } catch (error) {
        console.error('AgentService error:', error);
        return [];
    }
}
