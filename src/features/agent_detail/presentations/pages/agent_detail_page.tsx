import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { fetchAgentById } from '../../../agent_detail/data/agent_service';
import { Agent } from '../../../agent_detail/domain/models/agent_model';
import { AgentDetailView } from '../../presentations/components/body';
import { appStyle } from '../../../../product/styles/app_style';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../../../product/navigates/routes';
import { AppBar } from '../../../../product/components/app_appbar';
import { agentDetailPageStyles } from '../styles/agent_detail_page_styles';
type AgentDetailRouteProp = RouteProp<RootStackParamList, 'AgentDetail'>;

const AgentDetailPage = () => {
    const { params } = useRoute<AgentDetailRouteProp>();
    const [loading, setLoading] = useState(true);
    const [agent, setAgent] = useState<Agent | null>(null);

    useEffect(() => {
        fetchAgentById(params.agentId).then(setAgent).finally(() => setLoading(false));
    }, [params.agentId]);

    if (loading) {
        return (
            <View style={agentDetailPageStyles.centeredContainer}>
                <ActivityIndicator size="large" color="#FF4655" />
            </View>
        );
    }

    if (!agent) {
        return (
            <View style={agentDetailPageStyles.centeredContainer}>
                <Text style={{ color: 'white' }}>Agent Not Found.</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={appStyle.appLayout}>
            <AppBar title={agent.displayName} />
            <AgentDetailView agent={agent} />
        </SafeAreaView>
    );
};



export default AgentDetailPage;
