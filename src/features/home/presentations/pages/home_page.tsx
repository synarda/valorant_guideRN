import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { appStyle } from '../../../../product/styles/app_style';
import { AppImage } from '../../../../product/components/app_image';
import { AppAssets } from '../../../../config/assets';
import { fetchAgents } from '../../../home/data/services/agents_service';
import { Agent } from '../../domain/models/agent_model';
import { AgentListItemView } from '../components/agent_list_item';
import { RootStackParamList } from '../../../../product/navigates/routes';
import { homeStyles } from '../styles/home_style';
import { AppTypography } from '../../../../product/typography/typography';

export default function HomeScreen() {
    const [agents, setAgents] = useState<Agent[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    useEffect(() => {
        fetchAgents().then(setAgents).finally(() => setLoading(false));
    }, []);

    return (
        <SafeAreaView style={appStyle.appLayout}>
            <View style={appStyle.appBar}>
                <AppImage source={AppAssets.valorantLogo} resizeMode="cover" style={homeStyles.image} />
                <Text style={AppTypography.titleLarge}>Valorant Guide</Text>
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
                        <AgentListItemView
                            agent={item}
                            onPress={() => navigation.navigate('AgentDetail', { agentId: item.uuid })}
                        />
                    )}
                />
            )}
        </SafeAreaView>
    );
}
