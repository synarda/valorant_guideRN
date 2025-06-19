import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { homeStyles } from '../styles/home_page_styles';
import { appStyle } from '../../../../product/styles/app_style';
import { AppTypography } from '../../../../product/typography/typography';
import { AppImage } from '../../../../product/components/app_image';
import { AppAssets } from '../../../../config/assets';
import { fetchAgents } from '../../../home/data/services/agents_service';
import { Agent } from '../../domain/models/agent_model';
import { AgentListItemView } from '../components/agent_list_item';

export default function HomeScreen() {
    const [agents, setAgents] = useState<Agent[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchAgents().then(setAgents).finally(() => setLoading(false));
    }, []);

    return (
        <SafeAreaView style={appStyle.appLayout}>
            <View style={appStyle.appBar}>
                <AppImage source={AppAssets.valorantLogo} resizeMode="cover" style={{ width: 50, height: 50 }} />
                <Text style={appStyle.appBarTitle}>Valorant Guide</Text>
            </View>

            {loading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#FF4655" />
                </View>
            ) : (
                <FlatList
                    data={agents}
                    keyExtractor={(item) => item.uuid}
                    contentContainerStyle={{ padding: 16 }}
                    renderItem={({ item }) => (
                        <AgentListItemView agent={item} />
                    )}
                />
            )}

        </SafeAreaView>
    );
}